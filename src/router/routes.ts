import DefaultLayout from '~/layout/default/default.layout'
import WorkspaceLayout from '~/layout/workspace/workspace.layout'

import Login from '~/pages/login/login'
import Dashboard from '~/pages/dashboard/dashboard'
import Page1 from '~/pages/page1/page1'
import APIDemandRequestList from '~/pages/api-demand-request-list/api-demand-request-list'
import DemandRequestForm from '~/pages/demand-request-form/demand-request-form'
import APIReviewRequestList from '~/pages/api-review-request-list/api-review-request-list'

export const routes = [
    { path: '/', exact: true, redirect: '/login' },
    {
        path: '/login',
        exact: true,
        component: Login,
        layout: DefaultLayout,
        auth: false
    },
    {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/api/page1',
        exact: true,
        component: Page1,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/api/api-demand-request-list',
        exact: true,
        component: APIDemandRequestList,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/api/demand-request-form',
        exact: true,
        component: DemandRequestForm,
        layout: WorkspaceLayout,
        auth: true
    },
    {
        path: '/api/api-review-request-list',
        exact: true,
        component: APIReviewRequestList,
        layout: WorkspaceLayout,
        auth: true
    }
]