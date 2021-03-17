import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  width: 7rem;

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  background: ${({ theme }) => theme.colors.backgroundLight};

  > svg {
    path{
      fill: ${({ theme }) => theme.colors.logoColor};
    }
    margin: 2rem;
  }

  nav{
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  nav a{
    cursor: pointer;
    position: relative;

    align-self: center;
    justify-self: center;

    margin: 1rem;

    /* height: 100%; */

    &.active{
      color: ${({ theme }) => theme.colors.logoColor};

      &::before{
        content: "";
        background: ${({ theme }) => theme.colors.logoColor};
        border-radius: 0px 5px 5px 0px;
        position: absolute;
        left: -2.2rem;
        width: 4px;
        height: 100%;
      }
    }
  }

  button{
    border: 0;
    background: transparent;
    outline-color: ${({ theme }) => theme.colors.backgroundLight};
    margin: 1rem;

    svg {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .logoutContainer{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 7rem;
    margin: 2rem;
  }

  @media (max-width: 800px){    
    flex-direction: row;

    padding: 2rem;
    left: unset;
    right: 0;
    top: 0;

    width: 100%;
    height: 3rem;

    border-top-right-radius: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    
    svg {
      width: 2.2rem;
    }

    > div {
      display: flex;
      align-items:center;

      a:last-child{
        margin-left: 16px;
      }
    }
  }

  @media (max-width: 800px){    
   >nav{
     display: flex;
     align-items:center;
     justify-content: center;

    a {
      margin-left: 16px;

      &.active::before{
        content: "";
        top: -26px;
        left: 13px;
        transform: rotate(90deg);
      }
    }
   }

   .logoutContainer{
    cursor: pointer;
    max-width: 3rem;
  }
  }
`;