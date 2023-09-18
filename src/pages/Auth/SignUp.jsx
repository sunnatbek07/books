import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import IMG from "../../assets/images/signup.png";
import { Link } from "react-router-dom";
import useAuth from './../../service/auth/useAuth';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Success:", values);
        useAuth.register(values).then((res) => {
            console.log(res);
            toast.success(`${values.firstName} muvaffaqiyatli ro'yhatdam o'tdingiz.`);
            setTimeout(() => {
                navigate("/signin");
            }, 1600);
        }).catch((err) => {
            toast.error(err.response.data.message);
            console.log(err);
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        toast.warn("Iltimos, Maydonlarni to'ldiring!")
    };

    return (
        <div className="grid  grid-cols-2 items-center w-full mx-auto h-screen gap-x-[81px]">
            <div className="item bg-[#C9AC8C]  h-full flex items-center justify-end me-4">
                <img src={IMG} alt="" />
            </div>
            <div className="item">
                <ToastContainer />
                <h1 className="my-8 text-sm font-sans">
                    Avval ro'yhatdan o'tmagansizmi ?
                    <Link to="/signin" className="text-blue-400">
                        (Kirish)
                    </Link>
                </h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: "Iltimos ismingizni kiriting!",
                            },
                        ]}
                    >
                        <Input className="rounded-lg py-2 border-[#c8c8c8]" placeholder="Ism" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: "Iltimos sharifingizni kiriting!",
                            },
                        ]}
                    >
                        <Input className="rounded-lg py-2 border-[#c8c8c8]" placeholder="Sharif" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Iltimos telefon raqam kiriting!",
                            },
                        ]}
                    >
                        <Input type="tel" className="rounded-lg py-2 border-[#c8c8c8]" placeholder="Tel:" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Iltimos email kiriting!",
                            },
                        ]}
                    >
                        <Input className="rounded-lg py-2 border-[#c8c8c8]" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Iltmos parolni kiriting!",
                            },
                        ]}
                    >
                        <Input.Password className="py-2 mt-4" placeholder="Parol" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="mx-auto block bg-slate-700 text-white rounded-2xl w-full  mt-4 hover:text-white"
                            htmlType="submit"
                        >
                            Ro'yhatdan o'tish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default SignIn;
