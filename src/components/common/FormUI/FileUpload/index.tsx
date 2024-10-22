import { ChangeEvent, useEffect, useState } from 'react';
import type {
  UseFormRegister,
  UseFormSetValue,
  FieldValues,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import useCustomUpload from '@Hooks/useCustomUpload';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import Icon from '@Components/common/Icon';
import Image from '@Components/RadixComponents/Image';
import Input from '../Input';

type FileType = File & {
  lastModifiedDate: Date;
};

type UploadedFilesType = {
  id: string;
  previewUrl: string;
  file: FileType;
}[];

type FileEvent = ChangeEvent<HTMLInputElement> & {
  target: EventTarget & { files: FileList };
};

interface IFileUploadProps {
  name: string;
  multiple?: boolean;
  fileAccept?: string;
  data?: [];
  placeholder?: string;
  onChange?: any;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

export default function FileUpload({
  name,
  register,
  setValue,
  multiple,
  fileAccept = 'image/*',
  data,
  placeholder,
  onChange,
}: IFileUploadProps) {
  const [inputRef, onFileUpload] = useCustomUpload();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFilesType>([]);

  // for edit
  useEffect(() => {
    // @ts-ignore
    if (!data || (data && typeof data?.[0] !== 'string')) return;
    const uploaded = data.map((url: string) => {
      const urlArray = url?.split('/');
      return {
        id: uuidv4(),
        previewURL: url,
        file: { name: urlArray?.[urlArray.length - 1] || null },
      };
    });
    //   @ts-ignore
    setUploadedFiles(uploaded);
  }, [data]);

  // register form element to useForm
  useEffect(() => {
    register(name);
    setValue(name, []);
  }, [register, name, setValue]);

  const handleFileUpload = (event: FileEvent) => {
    const { files } = event.target;
    const uploaded = Array.from(files).map(file => ({
      id: uuidv4(),
      previewURL: URL.createObjectURL(file),
      file,
    }));
    const uploadedFilesState = multiple
      ? [...uploadedFiles, ...uploaded]
      : uploaded;
    //   @ts-ignore
    setUploadedFiles(uploadedFilesState);
    setValue(name, uploadedFilesState, { shouldDirty: true });
    onChange?.(uploadedFiles);
  };

  function downloadBlob(blobURL: string, fileName: string) {
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDeleteFile = (id: string) => {
    const updatedData = uploadedFiles.filter(file => file.id !== id);
    setUploadedFiles(updatedData);
    setValue(name, updatedData, { shouldDirty: true });
  };

  return (
    <FlexColumn gap={2}>
      <FlexColumn
        className="cursor-pointer items-center justify-center rounded-lg border-2
          border-dashed  bg-grey-100 py-2.5 "
        //   @ts-ignore
        onClick={onFileUpload}
      >
        <Icon name="cloud_upload" className="text-3xl text-primary-400 " />
        <p className="text-xs text-grey-600">
          {placeholder || 'Please upload picture (jpeg, png file format)'}
        </p>
        <Input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          onChange={handleFileUpload}
          accept={fileAccept}
        />
      </FlexColumn>
      <FlexColumn gap={2} className="scrollbar max-h-52 overflow-auto ">
        {/* @ts-ignore */}
        {uploadedFiles.map(({ file, id, previewURL }) => (
          <FlexRow
            key={id}
            className="items-center justify-between rounded-lg border px-4 py-2"
          >
            <FlexRow gap={4} className="items-center">
              <Image src={previewURL} width={40} alt="" />
              <FlexColumn>
                <h5 className="text-sm">{file?.name}</h5>
                {file && file?.lastModified && (
                  <p className="text-xs text-grey-600">
                    Uploaded on
                    {format(new Date(file.lastModifiedDate), 'MMM dd yyyy')}
                  </p>
                )}
              </FlexColumn>
            </FlexRow>
            <FlexRow gap={2}>
              <Icon
                name="download"
                className="text-grey-400"
                onClick={() => downloadBlob(previewURL, file?.name)}
              />
              <Icon
                name="delete"
                className="text-red-500"
                onClick={() => handleDeleteFile(id)}
              />
            </FlexRow>
          </FlexRow>
        ))}
      </FlexColumn>
    </FlexColumn>
  );
}
