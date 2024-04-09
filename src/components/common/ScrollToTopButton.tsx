import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import theme from '../../styles/Theme';

const BtnScrollToTop = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${theme.colors.Red};
    color: ${theme.colors.White};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:hover {
      opacity: 0.8;
    }
`

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible &&
                <BtnScrollToTop onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </BtnScrollToTop>
            }
        </div>
    );
}

export default ScrollToTopButton;
