import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                        }}>
                        <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://i.ibb.co/5hb1Wh7M/77afeece4337.png"
                                alt="公司办公环境"
                                className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
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
                        }}>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">公司简介</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">深圳市美蓓亚斯科技有限公司成立于2015年，是一家专业生产直线模组、伺服电缸、直线电机、工业机器人、智能设备、步进/伺服电机及驱动器、机械零部件等工业自动化产品，自主创新的高新技术企业。
                                                                                                                             </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">旗下设有:惠州实力工厂，昆山、无锡生产工厂，合肥、长沙、上海等分公司，经销代理商遍布全国。拥有上百台先进的生产设备和20+专业的技术团队，200+员工，SOP标准化生产，多条高效产线。
                                                                                                                             </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">公司已通过ISO9001质量体系认证，产品通过国际CE、中国检验机构CMA、国家实验室CNAS、国际实验室ILAC-MRA、德国TUV实力工厂等认证，荣获多种荣誉奖项和专利，品质和性能达到国际先进水平。
                                                                                                                             </p>
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">了解更多 <i className="fa-solid fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>
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
                     className="mt-20">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-10 text-center">公司证书</h3>
                        <div className="space-y-12">
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                          >
                            <img 
                              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/图片21_20260313141651.png" 
                              alt="企业荣誉证书" 
                              className="w-full h-auto object-contain max-h-[500px]"
                            />
                            <div className="p-5 text-center">
                              <p className="text-lg font-medium text-gray-800">企业荣誉证书</p>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                          >
                            <img 
                              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/图片22_20260313141655.png" 
                              alt="认证资质证书" 
                              className="w-full h-auto object-contain max-h-[500px]"
                            />
                            <div className="p-5 text-center">
                              <p className="text-lg font-medium text-gray-800">认证资质证书</p>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                          >
                            <img 
                              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/图片23_20260313142045.png" 
                              alt="软件著作权与专利证书" 
                              className="w-full h-auto object-contain max-h-[500px]"
                            />
                            <div className="p-5 text-center">
                              <p className="text-lg font-medium text-gray-800">软件著作权与专利证书</p>
                            </div>
                          </motion.div>
                        </div>
                 </motion.div>
            </div>
        </section>
    );
};

export default About;