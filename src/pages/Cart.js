import CartForm from "../components/Cart/CartForm";
import PageContent from "../components/PageContent/PageContent";
function CartPage (){
    return (
      <PageContent title="Your Cart">
        <CartForm></CartForm>
    </PageContent>
    )
}
export default CartPage;