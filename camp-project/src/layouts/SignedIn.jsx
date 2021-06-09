import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQGg4ACmylJTKA/profile-displayphoto-shrink_800_800/0/1600520056897?e=1628726400&v=beta&t=rQTLzJ_u77Xv6aHrOERA21uOXwdQiqgs8pIObNwuy2g"/>
                <Dropdown pointing="top left" text="Miraç Hicranlı">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
