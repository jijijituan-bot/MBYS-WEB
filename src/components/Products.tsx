import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 定义图片类型
interface ProductImage {
  url: string;
  name: string;
}

// 定义产品类型
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  images?: ProductImage[]; // 添加多个图片字段
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 使用独立的ref对象存储每个按钮的引用
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  
  // 使用独立的ref对象存储每个产品卡片的引用
  const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const productCategories = [
    { id: "all", name: "全部产品" },
    { id: "linear", name: "直线传动" },
    { id: "robot", name: "工业机器人" },
    { id: "intelligent", name: "智能设备" },
    { id: "rotary", name: "旋转运动" }
  ];

  // 直线模组的图片集合，每个图片包含URL和名称
  const linearModuleImages = [
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/ER导轨式欧规皮带模组_20260313102951.png",
      name: "ER导轨式欧规皮带模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/E导杆式欧规皮带模组_20260313102951.png",
      name: "E导杆式欧规皮带模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MK钢制型丝杆模组_20260313102951.png",
      name: "MK钢制型丝杆模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MTA无尘式皮带模组_20260313102951.png",
      name: "MTA无尘式皮带模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MTB内嵌式皮带模组_20260313102951.png",
      name: "MTB内嵌式皮带模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MTC齿轮齿条直线模组_20260313102951.png",
      name: "MTC齿轮齿条直线模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MTH内嵌式丝杆模组_20260313102951.png",
      name: "MTH内嵌式丝杆模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MT标准型皮带模组_20260313104823.png",
      name: "MT标准型皮带模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MYA无尘式丝杆模组_20260313104823.png",
      name: "MYA无尘式丝杆模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MY标准型丝杆模组_20260313104823.png",
      name: "MY标准型丝杆模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/多轴组合模组_20260313104823.png",
      name: "多轴组合模组"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/高精密滚珠丝杆 线性导轨_20260313104823.png",
      name: "高精密滚珠丝杆 线性导轨"
    }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "直线模组",
      category: "linear",
      description: "高精度直线传动模组，适用于各种自动化设备，提供稳定可靠的直线运动控制。",
      image: linearModuleImages[0].url, // 使用第一张图片的URL作为主图
      images: linearModuleImages // 添加所有直线模组的图片及其名称
    },
    {
      id: 2,
      name: "伺服电缸",
      category: "linear",
      description: "高刚性、高精度的直线执行器，用于替代传统液压缸和气缸，实现更精准的控制。",
      image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/AMDG轻载型伺服电缸_20260313105217.png",
      images: [
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/AMDG轻载型伺服电缸_20260313105217.png",
          name: "AMDG轻载型伺服电缸"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/AMDG中载型伺服电缸_20260313105217.png",
          name: "AMDG中载型伺服电缸"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/AMDG重载型伺服电缸_20260313105217.png",
          name: "AMDG重载型伺服电缸"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/定制化伺服电缸_20260313105217.png",
          name: "定制化伺服电缸"
        }
      ]
    },
    {
      id: 3,
      name: "直线电机",
      category: "linear",
      description: "直接驱动直线运动的电机，无需中间传动机构，提供高速度、高精度的直线运动。",
      image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MC全封闭直线电机模组_20260313110016.png",
      images: [
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MC全封闭直线电机模组_20260313110016.png",
          name: "MC全封闭直线电机模组"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MG内嵌式直线电机模组_20260313110016.png",
          name: "MG内嵌式直线电机模组"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MR紧凑型直线电机模组_20260313110016.png",
          name: "MR紧凑型直线电机模组"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MS半封闭直线电机模组_20260313110016.png",
          name: "MS半封闭直线电机模组"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/MUM无铁芯U型直线电机_20260313110016.png",
          name: "MUM无铁芯U型直线电机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/堆叠精密运动大理石平台_20260313110016.png",
          name: "堆叠精密运动大理石平台"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/龙门精密运动大理石平台_20260313110016.png",
          name: "龙门精密运动大理石平台"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/有铁芯平板直线电机_20260313110016.png",
          name: "有铁芯平板直线电机"
        }
      ]
    },
        {
      id: 4,
      name: "工业机器人",
      category: "robot",
      description: "用于工业自动化生产的多关节机械手或多自由度机器人，能够完成各种重复性、高精度的工业操作任务。",
      image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/全自动分拣线定制_20260313110727.png",
       images: [
         {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/全自动分拣线定制_20260313110727.png",
          name: "全自动分拣线定制"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/蜘蛛手并联机器人-2_20260313110727.png",
          name: "蜘蛛手并联机器人(带工作台)"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/蜘蛛手并联机器人-1_20260313110727.png",
          name: "蜘蛛手并联机器人(本体)"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/六轴协作机器人-1_20260313110727.png",
          name: "六轴协作机器人(本体)"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/六轴协作机器人-2_20260313110727.png",
          name: "六轴协作机器人(带控制柜)"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/四轴SCARA机器人-1_20260313110727.png",
          name: "四轴SCARA机器人(本体)"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/四轴SCARA机器人-2_20260313110727.png",
          name: "四轴SCARA机器人(带工作台)"
        }
      ]
    },
      {
      id: 5,
      name: "智能设备",
      category: "intelligent",
      description: "集成人工智能技术的自动化设备，提供智能感知、决策和执行能力，广泛应用于工业生产和物流领域。",
      image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/全自动组装线定制_20260313112049.png",
      images: [
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/全自动组装线定制_20260313112049.png",
          name: "全自动组装线定制"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/智能自动化设备定制_20260313112049.png",
          name: "智能自动化设备定制"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/自动上下料焊接 铆压机定制_20260313112049.png",
          name: "自动上下料焊接 铆压机定制"
        }
      ]
    },
     {
      id: 6,
      name: "旋转传动",
      category: "rotary",
      description: "基于机器视觉和自动控制技术的智能分拣系统，提高物流效率，降低人工成本。",
      image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/DD马达直驱式力矩电机_20260313135038.png",
      images: [
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/DD马达直驱式力矩电机_20260313135038.png",
          name: "DD马达直驱式力矩电机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/低压直流伺服电机_20260313135037.png",
          name: "低压直流伺服电机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/高精密行星减速机_20260313135038.png",
          name: "高精密行星减速机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/高性能交流伺服电机_20260313135038.png",
          name: "高性能交流伺服电机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/工业级直流无刷电机_20260313135038.png",
          name: "工业级直流无刷电机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/开闭环混合式步进电机-1_20260313135038.png",
          name: "开闭环混合式步进电机-1"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/开闭环混合式步进电机-2_20260313135037.png",
          name: "开闭环混合式步进电机-2"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/空心杯直流无刷电机_20260313135038.png",
          name: "空心杯直流无刷电机"
        },
        {
          url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/直线丝杆步进电机_20260313135038.png",
          name: "直线丝杆步进电机"
        }
      ]
     }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // 获取当前选中的产品
  const getCurrentProduct = () => {
    return products.find(product => product.id === selectedProduct) || null;
  };

  // 为每个产品创建独立的点击处理函数
  const createHandleClick = useCallback((productId: number) => {
    // 使用闭包确保每个按钮的事件处理函数完全独立
    return function(e: React.MouseEvent<HTMLButtonElement>) {
      // 严格阻止事件传播，防止触发父元素事件
      e.stopPropagation();
      e.preventDefault();
      
      // 设置选中的产品
      setSelectedProduct(productId);
      setCurrentImageIndex(0); // 重置图片索引
      
      // 检查是否有额外的图片，如果有则显示图片查看器
      const product = products.find(p => p.id === productId);
      if (product && product.images && product.images.length > 0) {
        setShowImageViewer(true);
      }
      
      console.log(`查看产品 ${productId} 详情`);
      
      // 可选：滚动到选中的产品
      if (productRefs.current[productId]) {
        productRefs.current[productId]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    };
  }, []);

  // 图片查看器导航函数
  const nextImage = () => {
    const currentProduct = getCurrentProduct();
    if (currentProduct && currentProduct.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentProduct.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    const currentProduct = getCurrentProduct();
    if (currentProduct && currentProduct.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? currentProduct.images!.length - 1 : prevIndex - 1
      );
    }
  };

  // 关闭图片查看器
  const closeImageViewer = () => {
    setShowImageViewer(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">产品中心</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            我们提供全面的工业自动化解决方案，包括直线传动、工业机器人、智能设备和旋转运动产品，满足不同行业的需求。
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
         <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map(product => {
            // 为每个产品创建独立的点击处理函数
            const handleClick = createHandleClick(product.id);
            
            return (
              <motion.div
                ref={el => productRefs.current[product.id] = el}
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  selectedProduct === product.id ? 'ring-2 ring-blue-500 ring-offset-2 shadow-xl' : 'hover:shadow-xl'
                }`}
                style={{ isolation: 'isolate' }} // 确保每个卡片创建独立的堆叠上下文
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  {/* 每个按钮都有完全独立的事件处理函数 */}
                  <button
                    ref={el => buttonRefs.current[product.id] = el}
                    id={`detail-button-${product.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    onClick={handleClick}
                    style={{ 
                      position: 'relative', 
                      zIndex: 10, // 确保按钮在最上层
                      isolation: 'isolate' // 创建独立的堆叠上下文
                    }}
                  >
                    查看详情 <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 图片查看器模态框 */}
      <AnimatePresence>
        {showImageViewer && (() => {
          const currentProduct = getCurrentProduct();
          if (!currentProduct || !currentProduct.images) return null;
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeImageViewer}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 标题栏 */}
                <div className="absolute top-0 left-0 right-0 bg-black/70 text-white p-4 rounded-t-lg flex justify-between items-center z-10">
                  <h3 className="text-xl font-semibold">{currentProduct.name} - 产品图库</h3>
                  <button 
                    className="text-white hover:text-gray-300 text-xl"
                    onClick={closeImageViewer}
                  >
                    <i className="fa-solid fa-times"></i>
                  </button>
                </div>
                
                {/* 主要图片显示区域 */}
                <div className="flex-1 w-full flex items-center justify-center bg-black/30 rounded-lg overflow-hidden mt-16 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                       src={currentProduct.images[currentImageIndex].url}
                       alt={`${currentProduct.name} - ${currentProduct.images[currentImageIndex].name}`}
                       className="max-h-[60vh] max-w-full object-contain"
                     />
                      {/* 显示图片名称 - 移到标题栏水平位置且在图片正上方 */}
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full text-base font-medium z-20">
                        {currentProduct.images[currentImageIndex].name}
                      </div>
                  </AnimatePresence>
                </div>
                
                {/* 缩略图导航 */}
                <div className="w-full overflow-x-auto pb-2 mt-12">
                  <div className="flex space-x-2 min-w-max">
                    {currentProduct.images.map((image, index) => (
                      <button
                        key={index}
                        className={`w-20 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${
                           index === currentImageIndex 
                             ? 'border-blue-500 scale-110' 
                             : 'border-transparent hover:border-blue-300'
                         } relative`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                       <img 
                         src={image.url} 
                         alt={image.name} 
                         className="w-full h-full object-cover"
                       />
                       {/* 缩略图图片名称 */}
                       <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center truncate">
                         {image.name}
                       </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* 导航按钮 */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <i className="fa-solid fa-chevron-left text-xl"></i>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <i className="fa-solid fa-chevron-right text-xl"></i>
                </button>
                
                {/* 图片计数器 */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {currentProduct.images.length}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};

export default Products;