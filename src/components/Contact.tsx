import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast.success("您的信息已提交成功，我们会尽快与您联系！");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

            setIsSubmitting(false);
        }, 1500);
    };

      const contactInfo = [{
        icon: "fa-map-marker-alt",
        title: "公司地址",
        value: "深圳市光明新区公明南环大道格雅科技大厦12楼"
     }, {
        icon: "fa-phone-office",
        title: "官方电话",
        value: "（86）0755-23491100",
        customIcon: "https://i.ibb.co/8Rnq1wN/fffd7c23cfbc.png"
    }, {
        icon: "fa-headset",
        title: "选型报价",
        value: "135 3058 1463"
    }, {
        icon: "fa-clock",
        title: "工作时间",
        value: "周一至周五 9:00-18:00"
    }];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        viewport={{
                            once: true
                        }}
                         className="bg-white p-6 md:p-8 rounded-2xl shadow-lg h-[540px]">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">公司位置</h3>
                        <div
                            className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                            {}
                            <div className="absolute inset-0 flex flex-col">
                                {}
                                <div className="bg-white shadow-sm p-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="text-blue-600 font-bold">百度地图</div>
                                        <div className="text-xs text-gray-500">v18.0</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <button
                                            className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                            <i className="fa-solid fa-location-crosshairs text-gray-600"></i>
                                        </button>
                                        <button
                                            className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                            <i className="fa-solid fa-plus text-gray-600"></i>
                                        </button>
                                    </div>
                                </div>
                                 {}
                                <div className="flex-grow relative cursor-pointer">
                                    <a 
                                        href="https://api.map.baidu.com/marker?location=22.743021,113.917466&title=深圳市美蓓亚斯科技有限公司&content=深圳市光明新区公明南环大道格雅科技大厦12楼&output=html&src=webapp.baidu.openAPIdemo" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block w-full h-full"
                                    >
                                        <img
                                            src="https://i.ibb.co/bjvmNw5W/3f8dfc90e5fc.png"
                                            alt="百度地图显示"
                                            className="w-full h-full object-cover" />
                                    </a>
                                    {}
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                                        <div
                                            className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div
                                            className="w-20 h-20 bg-blue-600/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                                    </div>
                                    {}
                                    <div className="absolute bottom-4 left-4 text-xs text-gray-500">© 2026 Baidu - GS(2022)3124号
                                                                            </div>
                                </div>
                                {}
                                <div className="bg-white p-4 shadow-md">
                                    <h4 className="font-semibold text-gray-900">深圳市美蓓亚斯科技有限公司</h4>
                                    <p className="text-gray-600 text-sm mt-1">深圳市光明新区公明南环大道格雅科技大厦12楼
                                                                            </p>
                                    <div className="flex gap-2 mt-3">
                                        <button
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center">
                                            <i className="fa-solid fa-directions mr-2"></i>导航
                                                                                    </button>
                                        <button
                                            className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center">
                                            <i className="fa-solid fa-phone-alt mr-2"></i>电话
                                                                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {}
                       <motion.div
                        initial={{
                            opacity: 0,
                            x: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}
                        viewport={{
                            once: true
                        }}
                        className="bg-white p-6 md:p-8 rounded-2xl shadow-lg h-[540px] flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-5">联系方式</h3>
                        <div className="space-y-4 flex-grow">
                            {contactInfo.map((info, index) => <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                                    {info.customIcon ? (
                                        <img src={info.customIcon} alt={info.title} className="w-6 h-6" />
                                    ) : (
                                        <i className={`fa-solid ${info.icon} text-xl text-blue-600`}></i>
                                    )}
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                                    <p className="text-gray-600">{info.value}</p>
                                </div>
                            </div>)}
                        </div>
                        <div className="mt-6 pt-5 border-t border-gray-100">
                            <a 
                                href="tel:075523491100" 
                                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg text-center transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md"
                            >
                                <i className="fa-solid fa-phone-alt mr-2"></i>立即联系
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;