import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import GIT from '../images/icons/github-brands.png';
import IG from '../images/icons/instagram-brands.png';


import camera from '../images/modal.jpg'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 80vw;
  height: 90vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #efefef;
  color: #000;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 999;
  border-radius: 3px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 999;
`;

const ModalContent = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 100%;
  height: 100%;

  p {
    margin-bottom: 1rem;
  }

  h1{
      font-size: 2rem;
      margin: auto;
      // margin-bottom: 17%;
      position: absolute;
      
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  ul li a{
    margin: 0 .5rem;
  }
  a img{
    transition: 0.25s ease-in-out;
  }
  a img:hover{
    background-color: tomato;
    border-radius: 100%;
    padding: 1rem;
  }
  ul{
    margin: auto;
    margin-bottom: 3rem;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* <div className="img-contain">
                <ModalImg src={camera} alt='camera' />
              </div> */}
              <ModalContent>
                <h1>danielxshi@hotmail.com</h1>
                <ul>
                    <li>
                        <a target="_blank" href="https://github.com/danielxshi">
                            <img height="30" width="30" src={GIT} alt="Github Icon"/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/danielxshi/">
                            <img height="30" width="30"src={IG}  alt="Instagram Icon"/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/danielxshi/">
                            <img height="30" width="30"src={IG}  alt="Instagram Icon"/>
                        </a>
                    </li>
                </ul>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
