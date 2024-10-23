import { useLocation } from 'react-router-dom';
import { initDomToCode } from 'dom-to-code';
import { ToastContainer } from 'react-toastify';
import { useTypedDispatch, useTypedSelector } from '@Store/hooks';
import generateRoutes from '@Routes/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/testRoutes';
import {
  setModalContent,
  setPromptDialogContent,
  toggleModal,
  togglePromptDialog,
} from '@Store/actions/common';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@Components/common/Modal';
import PromptDialog from '@Components/common/PromptDialog';
import {
  getModalContent,
  getPromptDialogContent,
} from '@Constants/modalContents';
import SideBar from '@Views/Sidebar';

export default function App() {
  const { pathname } = useLocation();
  const dispatch = useTypedDispatch();
  const showModal = useTypedSelector(state => state.common.showModal);
  const modalContent = useTypedSelector(state => state.common.modalContent);
  const showPromptDialog = useTypedSelector(
    state => state.common.showPromptDialog,
  );
  const promptDialogContent = useTypedSelector(
    state => state.common.promptDialogContent,
  );

  const routesWithoutSidebar = [
    '/login',
    '/sign-up',
    '/forgot-password',
    '/public-page',
  ];

  const hideSideBar = routesWithoutSidebar.some(url => pathname.includes(url));

  const handleModalClose = () => {
    dispatch(toggleModal());
    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 150);
  };

  const handlePromptDialogClose = () => {
    dispatch(togglePromptDialog());
    setTimeout(() => {
      dispatch(setPromptDialogContent(null));
    }, 150);
  };

  return (
    <>
      {process.env.NODE_ENV !== 'production' &&
        !process.env.DISABLE_DOM_TO_CODE &&
        initDomToCode()}
      <div
        className={`${hideSideBar ? 'ml-0 h-screen w-screen overflow-hidden' : `ml-0 flex h-screen w-screen overflow-hidden bg-white`}`}
      >
        <ToastContainer />

        <Modal
          show={showModal}
          className={getModalContent(modalContent)?.className || ''}
          title={getModalContent(modalContent)?.title}
          onClose={handleModalClose}
          hideCloseButton={!!getModalContent(modalContent)?.hideCloseButton}
        >
          {getModalContent(modalContent)?.content}
        </Modal>

        <PromptDialog
          show={showPromptDialog}
          title={getPromptDialogContent(promptDialogContent)?.title}
          onClose={handlePromptDialogClose}
        >
          {getPromptDialogContent(promptDialogContent)?.content}
        </PromptDialog>

        <SideBar />

        {generateRoutes({
          routes:
            process.env.NODE_ENV !== 'production'
              ? [...testRoutes, ...appRoutes]
              : appRoutes,
        })}
      </div>
    </>
  );
}
