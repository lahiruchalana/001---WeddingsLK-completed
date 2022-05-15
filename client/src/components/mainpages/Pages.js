import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import ConfirmedVendors from './confirmedVendors/ConfirmedVendors'
import WishToBuy from './wishToBuy/WishToBuy'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'
import Home from '../home/Home'
import Services from '../services/Services'
import Example from '../budgetReport/BudgetReport'
import WeddingPlans from '../weddingPlans/WeddingPlans'
import Shop from '../shop/Shop'
import Galleries from '../galleries/Galleries'
import DetailWeddingPlan from '../detailWeddingPlan/DetailWeddingPlan'
import YourInfo from '../userProfile/YourInfo'
import UserProfile from '../userProfile/UserProfileCart'
import ConfirmedWeddingPlans from '../userProfile/ConfirmedWeddingPlans'
import WishToBuyWeddingPlans from '../userProfile/WishToBuyWeddingPlans'
import UserDashboardWishToBuy from '../userProfile/WishToBuy'
import UserDashboardConfirmVendors from '../userProfile/ConfirmedVendors'
import AdminProfile from '../adminProfile/AdminProfile'
import AdminServices from '../adminProfile/ServicesManagement'
import CurrentEmployees from '../adminProfile/CurrentEmployees'
import VendorManagement from '../adminProfile/VendorManagement'
import CustomersWishList from '../adminProfile/CustomersWishList'
import CompletedWeddings from '../adminProfile/CompletedWeddings'
import ConfirmedCustomers from '../adminProfile/ConfirmedCustomers'
import ProgressInWeddings from '../adminProfile/ProgressInWeddings'
import NotAssignedWeddings from '../adminProfile/NotAssignedWeddings'
import WeddingPlanManagement from '../adminProfile/WeddingPlanManagement'
import EmployeeProfile from '../employeeProfile/EmployeeProfile'
import TasksInProgress from '../employeeProfile/TasksInProgress'
import TasksCompleted from '../employeeProfile/TasksCompleted'
import CurrentCustomers from '../employeeProfile/CurrentCustomers'
import FeedBack from '../feedBacks/FeedBacks'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [isEmployee] = state.userAPI.isEmployee


    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vendors" exact component={Products} />
            <Route path="/services" exact component={Services} />



            <Route path="/wedding_plans" exact component={WeddingPlans} />
            <Route path="/detail_wedding_plan/:id" exact component={DetailWeddingPlan} />
            <Route path="/create_weddingPlan" exact component={isAdmin ? WeddingPlanManagement : NotFound} />
            <Route path="/edit_weddingPlan/:id" exact component={isAdmin ? WeddingPlanManagement : NotFound} />



            <Route path="/shops" exact component={Shop} />
            <Route path="/galleries" exact component={Galleries} />
            <Route path="/feedbacks" exact component={FeedBack} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/admin_services" exact component={isAdmin ? AdminServices : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? VendorManagement : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? VendorManagement : NotFound} />

            <Route path="/admin_profile" exact component={isAdmin ? AdminProfile : NotFound} />
            <Route path="/vendor_management" exact component={isAdmin ? VendorManagement : NotFound} />
            <Route path="/confirmed_customers" exact component={isAdmin ? ConfirmedCustomers : NotFound} />
            <Route path="/customers_wishlist" exact component={isAdmin ? CustomersWishList : NotFound} />
            <Route path="/current_emp" exact component={isAdmin ? CurrentEmployees : NotFound} />
            <Route path="/completed_weddings" exact component={isAdmin ? CompletedWeddings : NotFound} />
            <Route path="/progress_in_weddings" exact component={isAdmin ? ProgressInWeddings : NotFound} />
            <Route path="/not_assigned_weddings" exact component={isAdmin ? NotAssignedWeddings : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/user_profile" exact component={isLogged ? UserProfile : NotFound} />
            <Route path="/budget_report" exact component={isLogged ? Example : NotFound} />
            <Route path="/your_info" exact component={isLogged ? YourInfo : NotFound} />

            <Route path="/employee_profile" exact component={isEmployee ? EmployeeProfile : NotFound} />
            <Route path="/tasks_in_progress" exact component={isEmployee ? TasksInProgress : NotFound} />
            <Route path="/tasks_completed" exact component={isEmployee ? TasksCompleted : NotFound} />
            <Route path="/current_customers" exact component={isEmployee ? CurrentCustomers : NotFound} />


            <Route path="/cart" exact component={Cart} />
            <Route path="/confirmed_vendors" exact component={ConfirmedVendors} />
            <Route path="/user_dashboard_confirmed_vendors" exact component={UserDashboardConfirmVendors} />
            <Route path="/wish_to_buy" exact component={WishToBuy} />
            <Route path="/user_dashboard_wish_to_buy" exact component={UserDashboardWishToBuy} />
            <Route path="/confirmed_wedding_plans" exact component={ConfirmedWeddingPlans} />
            <Route path="/wish_to_buy_wedding_plans" exact component={WishToBuyWeddingPlans} />



            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
