import React from 'react';
import * as S from './styled';
import Logo from "./logo_search.svg";

export default function SearchPage() {
    return < S.Container >

        <S.Left>
            <h1>ReactGithubsearch</h1>

        </S.Left>

        <S.Right>
            <S.subRight>
                <img src={Logo}></img>
                <h1>Pesquise informações de repositórios de forma fácil e intuitiva!</h1>

            </S.subRight>
            
            <S.subRight1>
                <span>Desenvolvido por Breno Brito.</span>
            </S.subRight1>
            
        </S.Right>

    </S.Container >
}

