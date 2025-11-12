import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import DefaultLayout from '../layouts/DefaultLayout'
import Services from '../pages/Services'
import ServiceLayout from '../layouts/ServiceLayout'
import ProjectBased from '../pages/Services/DevelopmentModels/ProjectBased'
import LabBased from '../pages/Services/DevelopmentModels/LabBased'
import Offshore from '../pages/Services/DeliveryModels/Offshore'
import Onsite from '../pages/Services/DeliveryModels/Onsite'
import Recruit from '../pages/Services/Recruit'
import Achievements from '../pages/Achievements'
import AchievementLayout from '../layouts/AchievementLayout'
import AI from '../pages/Achievements/AI'
import AIInspection from '../pages/Achievements/AI/AIInspection'
import IoT from '../pages/Achievements/IoT'
import MobileBatteryShare from '../pages/Achievements/Iot/MobileBatteryShare'
import SmartParkingSystem from '../pages/Achievements/Iot/SmartParkingSystem'
import ParkingManagementSystem from '../pages/Achievements/Iot/ParkingManagementSystem'
import SmartManufacturing from '../pages/Achievements/SmartManufacturing'
import ApsIntro from '../pages/Achievements/SmartManufacturing/APS'
import MesIntro from '../pages/Achievements/SmartManufacturing/MES'
import WmsIntro from '../pages/Achievements/SmartManufacturing/WMS'
import ProductSelectionIntro from '../pages/Achievements/SmartManufacturing/ProductSelection'
import QuotationIntro from '../pages/Achievements/SmartManufacturing/Quotation'
import Others from '../pages/Achievements/Others'
import CompanyProfile from '../pages/CompanyProfile'
import About from '../pages/CompanyProfile/About'
import Team from '../pages/CompanyProfile/Team'
import Partners from '../pages/CompanyProfile/Partners'
import News from '../pages/News'
import NewsLayout from '../layouts/NewsLayout'
import NotFound from '../pages/NotFound'
import ErrorPage from '../pages/ErrorPage'
import Post from '../pages/News/Post'
import Category from '../pages/News/Category'
// Removed dedicated Contact page in favor of embedded homepage section
import PrivacyPolicy from '../pages/PrivacyPolicy'
import CarGpt from '../pages/Achievements/AI/CarGpt'
import AIVisa from '../pages/Achievements/AI/AIVisa'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'services',
        element: <ServiceLayout />,
        children: [
          { index: true, element: <Services /> },
          { path: 'development/project-based', element: <ProjectBased /> },
          { path: 'development/lab-based', element: <LabBased /> },
          { path: 'delivery/offshore', element: <Offshore /> },
          { path: 'delivery/onsite', element: <Onsite /> },
          { path: 'recruit', element: <Recruit /> },
        ],
      },
      {
        path: 'achievements',
        element: <AchievementLayout />,
        children: [
          { index: true, element: <Achievements /> },
          { path: 'ai', element: <AI /> },
          { path: 'ai-inspection', element: <AIInspection /> },
          { path: 'iot', element: <IoT /> },
          { path: 'mobile-battery-share', element: <MobileBatteryShare /> },
          { path: 'smart-parking-system', element: <SmartParkingSystem /> },
          { path: 'parking-management-system', element: <ParkingManagementSystem /> },
          { path: 'smart-manufacturing', element: <SmartManufacturing /> },
          { path: 'aps', element: <ApsIntro /> },
          { path: 'mes', element: <MesIntro /> },
          { path: 'wms', element: <WmsIntro /> },
          { path: 'product-selection', element: <ProductSelectionIntro /> },
          { path: 'quotation', element: <QuotationIntro /> },
          { path: 'others', element: <Others /> },
          { path: 'car-gpt', element: <CarGpt /> },
          { path: 'ai-visa', element: <AIVisa /> },
        ],
      },
      {
        path: 'company',
        children: [
          { index: true, element: <CompanyProfile /> },
          { path: 'about', element: <About /> },
          { path: 'team', element: <Team /> },
          { path: 'partners', element: <Partners /> },
        ],
      },
      {
        path: 'news',
        element: <NewsLayout />,
        children: [
          { index: true, element: <News /> },
          { path: 'category/:name', element: <Category /> },
          { path: ':slug', element: <Post /> },
        ],
      },
      // Redirect legacy /contact URLs to homepage contact section
      { path: 'contact', element: <Navigate to="/#contact" replace /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
        { path: '*', element: <NotFound /> },
    ],
  },
], { basename: import.meta.env.BASE_URL || '/' })

export default function AppRouter() {
  return <RouterProvider router={router} />
}
