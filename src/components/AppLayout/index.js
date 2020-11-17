import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'

import styles from './styles.module.scss'

const { Content, Footer, Sider } = Layout

const AppLayout = ({ children }) => {
  const history = useHistory()

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken)
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type)
        // }}
      >
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item
            key="1"
            icon={<FileTextOutlined />}
            onClick={() => {
              history.push('/')
            }}
          >
            Articles
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className={styles.content}>
          <div className={styles.container}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout
