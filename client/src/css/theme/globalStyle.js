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

	.select_navbar{
		border-top: ${({ theme }) => theme.navbarBorder};
	}

	section {
		margin-left: 64px;
		max-width: calc(100% - 64px);

	}


@media (min-width: 1263px) {
    section {
        margin-left: 135px;
        max-width: calc(100% - 135px);
    }
}

@media (max-width: 768px) {
    section {
        margin-left: 0px;
        max-width: 100%;
        margin: 64px 0;
    }
}
`;
