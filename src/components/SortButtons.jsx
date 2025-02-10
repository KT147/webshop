import { useTranslation } from 'react-i18next';

function SortButtons(props) {

    const { t } = useTranslation();

    const sortAZ = () => {
        const result = props.products.toSorted((a,b) => a.title.localeCompare(b.title))
        props.setProducts(result)
      }
    
      const sortZA = () => {
        const result = props.products.toSorted((a,b) => b.title.localeCompare(a.title))
        props.setProducts(result)
      }
    
      const priceIncrease = () => {
        const result = props.products.toSorted((a,b) => a.price - b.price)
        props.setProducts(result)
      }
    
      const priceDecrease = () => {
        const result = props.products.toSorted((a,b) => b.price-a.price)
        props.setProducts(result)
      }
    
      const ratingIncrease = () => {
        const result = props.products.toSorted((a,b) => a.rating.rate - b.rating.rate)
        props.setProducts(result)
      }
    
      const ratingDecrease = () => {
        const result = props.products.toSorted((a,b) => b.rating.rate - a.rating.rate)
        props.setProducts(result)
      }

  return (
    <div>
        <span>{t("home.sort")}</span>
      <button className="button" onClick={sortAZ}>A-Z</button>
      <button className="button" onClick={sortZA}>Z-A</button>
      <button className="button" onClick={priceIncrease}>{t("home.priceIncrease")}</button>
      <button className="button" onClick={priceDecrease}>{t("home.priceDecrease")}</button>
      <button className="button" onClick={ratingIncrease}>{t("home.ratingIncreasing")}</button>
      <button className="button" onClick={ratingDecrease}>{t("home.ratingDecreasing")}</button>
    </div>
  )
}

export default SortButtons