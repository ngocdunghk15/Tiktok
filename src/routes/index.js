import HomePage from '~/pages/Home'
import FollowingPage from '~/pages/Following'
import UploadPage from '~/pages/Upload'
import { HeaderOnlyLayout } from '~/components/Layout'
const privateRoutes = []

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    },
    {
        path: '/upload',
        component: UploadPage,
        layout: HeaderOnlyLayout,
    },
]

export { privateRoutes, publicRoutes }
