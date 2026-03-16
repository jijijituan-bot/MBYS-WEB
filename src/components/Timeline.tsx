import React from 'react';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      year: "2015",
      title: "公司创立",
      description: "创始人熊克豹和陈小清在深圳宝安区注册成立深圳市美蓓亚斯科技有限公司，成立旋转运动产品事业部，专业研发生产步进电机、伺服电机、行星减速机、智能驱动器等微电机控制与精密传动产品。"
    },
    {
      year: "2016",
      title: "夯实基础",
      description: "扩大化经营生产，精密微电机及驱动控制系统产品在研发、制造都以智能控制技术为核心，加上严格的品质管控，确保每一台出厂产品质量可靠、运行稳定的同时更加贴近人心，人性化使用。"
    },
    {
      year: "2017",
      title: "产业调整",
      description: "为了满足工业自动化行业客户日益增长的需求，注册MBYS商标，成立了直线传动产品事业部，从研发设计开始，到生产销售，我们依照ISO9001标准，建立了完善的质量管理体系。"
    },
    {
      year: "2018-2022",
      title: "完善产品",
      description: "完善产品，提升品质。直线传动类:直线模组、伺服电动缸、直线电机等产品;工业机器人类:协作机器人，并联机器人，SCARA机器人;智能设备类:全自动分拣线，组装整线，设备模块，非标设备;旋转运动类:DD马达，步进/伺服电机及驱动器等产品。"
    },
    {
      year: "2023-2024",
      title: "行业领先",
      description: "MBYS旗下成立，美蓓亚斯科技(惠州)有限公司实力工厂，昆山、无锡生产工厂，长沙、合肥、上海分公司，成为行业领先的直线模组，伺服电缸，直线电机生产制造商，一路来荣获多种奖项和专利。"
    },
    {
      year: "2025-未来",
      title: "深耕细耘",
      description: "继续在智能装备领域中深耕细耘，把产品做大做强。不忘初心，在智能装备领域，成为世界一流品牌!成就客户的心永远不变!成就核心供应商的心永远不变!成就团队成员的心永远不变!成就大业的心永远不变!"
    }
  ];
  
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">十年历程</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year */}
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 relative">
                  <div className={`flex items-center justify-center w-28 h-28 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg z-10`}>
                    {item.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;