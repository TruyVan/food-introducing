import { Button, Menu} from 'antd';
import {
    BookOutlined,
    FireOutlined,
    TeamOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
import './header.css'
import { Link } from 'react-router-dom';
import { headerState } from './HeaderState';
import { observer } from 'mobx-react';
const Header = ()=>{
    return(
    <header className="header container mx-auto py-3">
        <a href='/' className="header-logo">
            <h1 className='text-4xl font-extrabold text-signature'>Nhoằm nhoằm</h1>
        </a>
        <div className="header-menu">
            <Menu className="header-menu-content" mode='horizontal' defaultSelectedKeys={['home']}>
                <Menu.Item icon={<HomeOutlined/>} key={'home'} className="header-menu-item text-base">
                    <Link to={'/'}>Trang chủ</Link>
                </Menu.Item>
                <Menu.Item icon={<BookOutlined/>} key={'menu'} className="header-menu-item text-base">
                    <Link to={'/menu'}>Thực đơn</Link>
                </Menu.Item>
                <Menu.Item icon={<TeamOutlined/>} key={'about'} className="header-menu-item text-base">
                    <Link to={'/about'}>Giới thiệu</Link>
                </Menu.Item>
                <Menu.Item icon={<FireOutlined/>} key={'discount'} className="header-menu-item text-base" >
                    <Link to={'/discount'}>Khuyến mại</Link>
                </Menu.Item>
            </Menu>
        </div>
        <div className="header-action">
            <Button type='primary' danger>Đăng nhập</Button>
        </div>
    </header>)
}
export default observer(Header)