// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="background-container">
      <div className="card">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-container">
          {faqsList.map(eachItem => (
            <FaqItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
