import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../PaymentForm/paymentForm"

const PUBLIC_KEY = "pk_test_51N5epyIZon87GXS4J9R9NqnYAiVwEDD4mdx8xJgW777Vv55L9NWusQe2hKY89HhIz6iFBUylju9EWF13MnwUNds100Ygqpxje0"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}