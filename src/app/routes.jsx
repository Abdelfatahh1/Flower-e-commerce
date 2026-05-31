import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../components/layout/components/MainLayout";
import { AuthLayout } from "../components/layout/components/AuthLayout";
import { HomePage } from "../pages/home/HomePage";
import { ShopPage } from "../pages/ShopPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { WishlistPage } from "../pages/WishlistPage";
import { CheckoutReviewPage } from "../pages/CheckoutReviewPage";
import { CheckoutPaymentPage } from "../pages/CheckoutPaymentPage";
import { CheckoutSuccessPage } from "../pages/CheckoutSuccessPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/account/DashboardPage";
import { OrdersPage } from "../pages/account/OrdersPage";
import { NotificationsPage } from "../pages/account/NotificationsPage";
import { ProfilePage } from "../pages/account/ProfilePage";
import { PrivacyPage } from "../pages/account/PrivacyPage";
import { DeleteAccountPage } from "../pages/account/DeleteAccountPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "product/:slug", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "checkout", element: <CheckoutReviewPage /> },
      { path: "checkout/payment", element: <CheckoutPaymentPage /> },
      { path: "checkout/success", element: <CheckoutSuccessPage /> },
      { path: "account", element: <DashboardPage /> },
      { path: "account/orders", element: <OrdersPage /> },
      { path: "account/notifications", element: <NotificationsPage /> },
      { path: "account/compare", element: <></> },
      { path: "account/profile", element: <ProfilePage /> },
      { path: "account/privacy", element: <PrivacyPage /> },
      { path: "account/delete", element: <DeleteAccountPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
