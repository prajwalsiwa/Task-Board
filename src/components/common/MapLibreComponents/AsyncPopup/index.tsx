/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import { useEffect, useRef, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { Popup } from 'maplibre-gl';
import type { MapMouseEvent } from 'maplibre-gl';
import { Button } from '@Components/RadixComponents/Button';
import Skeleton from '@Components/RadixComponents/Skeleton';
import { IAsyncPopup } from '../types';

const popup = new Popup({
  closeOnClick: false,
  closeButton: false,
});

export default function AsyncPopup({
  map,
  fetchPopupData,
  popupUI,
  title,
  handleBtnClick,
  isLoading = false,
  onClose,
}: IAsyncPopup) {
  const [properties, setProperties] = useState<Record<string, any> | null>(
    null,
  );
  const popupRef = useRef(null);
  const [popupHTML, setPopupHTML] = useState<string>('');

  useEffect(() => {
    if (!map) return;
    function displayPopup(e: MapMouseEvent): void {
      if (!map) return;
      const features = map.queryRenderedFeatures(e.point);
      const clickedFeature = features?.[0];
      if (!clickedFeature) return;
      setProperties({
        ...clickedFeature.properties,
        layer: clickedFeature.source,
      });
      popup.setLngLat(e.lngLat);
    }
    map.on('click', displayPopup);
  }, [map]);

  useEffect(() => {
    if (!map || !properties) return;
    fetchPopupData?.(properties);
  }, [map, properties]); // eslint-disable-line

  useEffect(() => {
    if (!map || !properties || !popupUI || !popupRef.current) return;
    const htmlString = renderToString(popupUI(properties));
    popup.setDOMContent(popupRef.current).addTo(map);
    setPopupHTML(htmlString);
  }, [map, popupUI, properties]);

  const onPopupClose = () => {
    popup.remove();
    onClose?.();
    setProperties(null);
  };

  if (!properties) return <div />;

  return (
    <div ref={popupRef} className="w-[17.5rem] px-3">
      <div className="flex items-center justify-between py-2">
        {isLoading ? (
          <Skeleton className="my-3 h-4 w-1/2 rounded-md bg-grey-100 shadow-sm" />
        ) : (
          <p className="btn-text text-primary-400">{title}</p>
        )}
        <span
          role="button"
          tabIndex={0}
          className="text-grey-600"
          onClick={onPopupClose}
          onKeyDown={() => {}}
        >
          <i className="material-symbols-outlined">close</i>
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: popupHTML }} />
      {!isLoading && (
        <div className="p-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleBtnClick?.(properties)}
          >
            View More
          </Button>
        </div>
      )}
    </div>
  );
}
