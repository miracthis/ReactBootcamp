import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
            <Menu.Item>
            <Button primary style={{marginRight:"3px"}}>Giriş Yap</Button>
            <Button primary>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
