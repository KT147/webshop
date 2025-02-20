import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./i18n"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './store/AuthContext.jsx';
import { CartSumContextProvider } from './store/CartSumContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartSumContextProvider>
          <App />
       </CartSumContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)


// 1. react-router-dom. uue projekti tekitamine.
// 2. useState. useRef. && ehk dünaamiline väljakuvamine. onClick. funktsioonid
// 3. favicon, font, Firebase üleslaadimine, dünaamiline CSS, componentide väljatõste, kalkulaatorid 
// 4. Arrays: väljakuvamine, key, sort, filter
// 5. Arrays: kustutamine (splice), mälukoht (slice), faili tõstmine (.json), lisamine (push)
// 6. useParams () ühe võtmine. muutmine. early return HTML
// 7. objektid - võti-väärtus paarid. find(). early return funktsioonis. vormide kontroll onhange abil.
// 8. Toastify. vormide kontroll onChange abil. localStorage. 
// 9. API
// 10. Viimast korda veebipoodi: tõlked, Bootstrap, MUI, e-maili saatmine.
// 11. Webshopi algus. CSS moodulid, otsing. karussell-galerii. Pakiautomaadid. Leaflet
// 12. Leaflet nupud. Pakiautomaadi nupud. Leaflet vaate muutmine
// 13. Kogus ostukorvis, CSS
// 14. Makse, Props -> andmete saatmine komponentide vahel, Modal
// 15. Context: ostukorvisumma navbaris + auth
// 16. N 27.02 Back-end
// 17. K 05.03 TypeScript
// 18. K 12.03 9.00-10.30 lõpuprojekti esitlemine

// KOJU:
