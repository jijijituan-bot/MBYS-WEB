import React from "react";

const Footer: React.FC = () => {
    const quickLinks = [{
        label: "首页",
        href: "#"
    }, {
        label: "公司介绍",
        href: "#about"
    }, {
        label: "产品中心",
        href: "#products"
    }, {
        label: "公司历程",
        href: "#timeline"
    }, {
        label: "公司实力",
        href: "#strength"
    }, {
        label: "联系我们",
        href: "#contact"
    }];

    const productCategories = [{
        label: "直线模组",
        href: "#"
    }, {
        label: "伺服电缸",
        href: "#"
    }, {
        label: "直线电机",
        href: "#"
    }, {
        label: "工业机器人",
        href: "#"
    }, {
        label: "智能设备",
        href: "#"
    }, {
        label: "步进/伺服电机",
        href: "#"
    }];

    const contactInfo = [{
        icon: "fa-map-marker-alt",
        value: "深圳市光明新区公明南环大道格雅科技大厦12楼"
    }, {
        icon: "fa-phone-alt",
        value: "（86）0755-23491100"
    }];

    return (
        <footer className="bg-blue-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {}
                    <div>
                        <div className="text-2xl font-bold mb-6">MBYS</div>
                        <p className="text-blue-200 mb-6">深圳市美蓓亚斯科技有限公司，专业生产直线模组、伺服电缸、直线电机、工业机器人等工业自动化产品的高新技术企业。
                                        </p>
                        <></>
                    </div>
                    {}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">快速链接</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-blue-200 hover:text-white transition-colors duration-300">
                                    {link.label}
                                </a>
                            </li>)}
                        </ul>
                    </div>
                    {}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">产品分类</h4>
                        <ul className="space-y-3">
                            {productCategories.map((category, index) => <li key={index}>
                                <a
                                    href={category.href}
                                    className="text-blue-200 hover:text-white transition-colors duration-300">
                                    {category.label}
                                </a>
                            </li>)}
                        </ul>
                    </div>
                    {}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">联系我们</h4>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => <li key={index} className="flex items-start">
                                <i className={`fa-solid ${info.icon} mt-1 mr-3 text-blue-300`}></i>
                                <span className="text-blue-200">{info.value}</span>
                            </li>)}
                        </ul>
                    </div>
                </div>
                {}
                <div className="border-t border-blue-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-blue-300 text-sm mb-4 md:mb-0">© 2025 深圳市美蓓亚斯科技有限公司. 保留所有权利.
                                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-blue-300 hover:text-white text-sm transition-colors duration-300">隐私政策
                                              </a>
                            <a
                                href="#"
                                className="text-blue-300 hover:text-white text-sm transition-colors duration-300">使用条款
                                              </a>
                            <a
                                href="#"
                                className="text-blue-300 hover:text-white text-sm transition-colors duration-300">网站地图
                                              </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;