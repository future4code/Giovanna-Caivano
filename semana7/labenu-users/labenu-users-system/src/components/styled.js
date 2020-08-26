import styled from 'styled-components'
 
//styles for UserSubscription
export const MainContainer = styled.div`
    width: 50%;
    margin: 50px auto;
    display: grid;
    grid-column-template: 1fr;
    grid-rows: 4;
    row-gap: 5px;
    justify-content: center;
    border: solid 1px;
    padding: 25px;
`

export const MainTitle = styled.h1`
    width: 100%;
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 50px;
    `
    
    export const InputContainer = styled.div`
    width: 100%;
    `
    
    export const BigButton = styled.button`
    grid-row: 4;
    height: 30px;
    margin: 20px;
    padding: 5px;
    border-radius: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
`

export const StandardLabel = styled.label`
    margin: 2px;
`

//styles for UserList
export const UserUnorderedList = styled.ul`
    list-style-type: none;
    padding: 30px 60px;
    text-align: center;
`

export const UserTag = styled.li`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    bottom-margin: 4px;
    border-bottom: solid 1px;
`

export const UserName = styled.span`
    font-size: 20px;
`

export const DeleteX = styled.span`
    &:hover {
        color: red;
    }    
`

export const DetailContainer = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`

export const SmallButton = styled.button`
    margin: 5px;
    padding: 2px;
    border-radius: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    padding: 5px;

    &:hover {
        background-color: white;
        color: black;
    }
`

export const UserInfo = styled.div`
    padding: 5px;
`

export const UserInfoTitle = styled.p`
    font-weight: bold;
`

export const UserInfoText = styled.p`
    padding: 5px;
    margin: 0;
`

export const ButtonWrapper = styled.div`
    padding: 10px;
`