// styled-reset 사용방법
import { createGlobalStyle } from "styled-components"; // 글로벌 스타일 적용을 도와주는 styled-components내장 메서드
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	body{
        width: 100%;
		background: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
    div{
        background: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
    }
	textarea{
		background: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
	}
	svg{
		color: ${({ theme }) => theme.textColor};
	}
	a{
		color: ${({ theme }) => theme.textColor};
	}
	.navbar_text{
		color: ${({ theme }) => theme.navbarColor};
	}
`;
