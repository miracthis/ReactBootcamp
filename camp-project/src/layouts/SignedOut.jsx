import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    //!Destruct edip props yerine gelen formatları kullanabiliriz. props kullanımı signOut'da
    return (
        <div>
            <Menu.Item>
            <Button primary style={{marginRight:"3px"}} onClick={signIn}>Giriş Yap</Button>
            <Button primary>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
