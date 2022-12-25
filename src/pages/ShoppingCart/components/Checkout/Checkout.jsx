import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import "./Checkout.scss";
import { Input } from "../../../../components/Input";
import { makeOrder, setActiveModal, showModal } from "../../../../reducers";
import { validationSchema } from "../../../../helpers/validation";

const Checkout = ({ setIsCheckout }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            phone: '',
            address: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            dispatch(makeOrder());
            setIsCheckout(false);
            dispatch(setActiveModal("orderCompleted"));
            dispatch(showModal(true));
        },
    });

    return (
        <>
            <h2>BILLING ADDRESS</h2>
            <div>
                <form className="checkout-form" onSubmit={formik.handleSubmit}>
                    <div className="input-wrapper">
                        <Input
                            {...formik.getFieldProps('firstName')}
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="John"
                            error={formik.touched.firstName && formik.errors.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        <Input
                            label="E-mail"
                            name="email"
                            type="email"
                            placeholder="example@email.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && formik.errors.email}
                        />
                        <Input
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            error={formik.touched.lastName && formik.errors.lastName}
                        />
                        <Input
                            label="Age"
                            name="age"
                            type="text"
                            placeholder="28"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                            error={formik.touched.age && formik.errors.age}
                        />
                        <Input
                            label="Mobile Number"
                            name="phone"
                            type="tel"
                            placeholder="+123 456 789"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            error={formik.touched.phone && formik.errors.phone}
                        />
                        <Input
                            label="Address"
                            name="address"
                            type="text"
                            placeholder="New York, 123 Street"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            error={formik.touched.address && formik.errors.address}
                        />
                    </div>
                    <div className="submit-btn-wrapper">
                        <button type="submit">Make an order</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;
