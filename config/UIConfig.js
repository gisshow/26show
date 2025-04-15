// 负责控制 基础平台 Vue 项目的 UI 组件

let UIConfig = {
    // 当时组件的状态，是用于 Demo 演示，还是用在正真的生产环境下。
    demoModel: true,
    themeColor: 'green',


    meuns: [
        {
            name: '菜单', icon: 'icon-home2', id: 'home-tab', ahref:'', href: 'tab-home', ariacontrols: 'tab-home', ariaselected: false,
            class: "nav-link",
            sidebarmenu: [

                {
                    ulname: "菜单", class:"list-heading",
                    a: [
                        { name: '免费模型', href: "#3dmodels" },
                        { name: '付费模型', href: "#3dmodelspay" }
                    ],

                }
                // {
                //     ulname: "Layouts",class:"list-heading",
                //     a: [
                //         { name: 'Dashboard', href: "example" },
                //         { name: 'Analytics', href: "blank" }
                //     ],

                // }

            ],

            sidebarstarts: [
                { name: '付费模型',   href: "3dmodelspay", context: 22, color: "red" },
                { name: '免费模型', href: "#3dmodels", context: 12, color: "blue" },
            ]

        },
        // {
        //     name: 'Product', icon: 'icon-layers2', id: 'product-tab', ahref:'', href: 'tab-product', ariacontrols: 'tab-product', ariaselected: false,
        //     class: "nav-link",
        //     sidebarmenu: [
        //         {
        //             ulname: "Dashboard",class:"list-heading",
        //             a : [
        //                 { name: 'Dashboard', href: "example" },
        //                 { name: 'Analytics', href: "blank" }
        //             ],

        //         },
        //         {
        //             ulname: "Layouts",class:"list-heading",
        //             a: [
        //                 { name: 'Daygrid View', href: "example" },
        //                 { name: 'List View', href: "blank" }
        //             ],

        //         }

        //     ],

        //     sidebarstarts: [
        //         { name: 'New Orders',   href: "VRScreen", context: 12, color: "red" },
        //         { name: 'Products Grid', href: "home", context: 12, color: "blue" },

        //     ]
        // },
        {
            name: 'Settings', icon: 'icon-settings1', id: 'settings-tab', ahref:'login', href: 'tab-settings', ariacontrols: 'tab-authentication', ariaselected: false,
            class: "nav-link settings",
        },


    ],
    model:[
        {img:"1.jpg", path:"1.glb", title:"坦克" , Download:true, preview:true},
    
        {img:"3.jpeg", path:"3.glb",  title:"低楼层建筑物" , Download:true, preview:true},
        {img:"4.jpeg", path:"4.glb",  title:"Big G Building" , Download:true, preview:true},
        {img:"5.jpeg", path:"5.glb",  title:"Futuristic Building" , Download:true, preview:true},
        {img:"6.jpeg", path:"6.glb",  title:"城市建筑套件" , Download:true, preview:true},
    
        {img:"7.jpeg", path:"7.glb",  title:"废弃建筑" , Download:true, preview:true},
        {img:"8.jpeg", path:"8.glb",  title:"卡通建筑物" , Download:true, preview:true},
        {img:"9.jpeg", path:"9.glb",  title:"倾斜建筑物" , Download:true, preview:true},
        {img:"10.jpeg", path:"10.glb",  title:"嗣德陵" , Download:true, preview:true},
        {img:"11.jpeg", path:"11.glb",  title:"办公楼" , Download:true, preview:true},
        {img:"12.jpeg", path:"12.glb",  title:"建筑物模型" , Download:true, preview:true},
        {img:"13.jpeg", path:"13.glb",  title:"城中村居民楼" , Download:true, preview:true},
        {img:"14.jpeg", path:"14.glb",  title:"教学楼" , Download:true, preview:true},
        {img:"15.jpeg", path:"15.glb",  title:"澳式风格建筑" , Download:true, preview:true},
        {img:"16.jpeg", path:"16.glb",  title:"树林" , Download:true, preview:true},
        {img:"17.jpeg", path:"17.glb",  title:"建筑物" , Download:true, preview:true},
        {img:"18.jpeg", path:"18.glb",  title:"树" , Download:true, preview:true},
        {img:"19.jpeg", path:"19.glb",  title:"艺术品" , Download:true, preview:true},
        {img:"20.jpeg", path:"20.glb",  title:"古树" , Download:true, preview:true},
        {img:"21.jpeg", path:"21.glb",  title:"艺术树" , Download:true, preview:true},
        {img:"22.jpeg", path:"22.glb",  title:"艺术树" , Download:true, preview:true},
        {img:"23.jpeg", path:"23.glb",  title:"艺术树" , Download:true, preview:true},
        {img:"24.jpeg", path:"24.glb",  title:"书本" , Download:true, preview:true},
        {img:"25.jpeg", path:"25.glb",  title:"桌椅" , Download:true, preview:true},
        {img:"26.jpeg", path:"26.glb",  title:"小院" , Download:true, preview:true},
        {img:"27.jpeg", path:"27.glb",  title:"桌子" , Download:true, preview:true},
        {img:"28.gif", path:"28.glb",  title:"青蛙" , Download:true, preview:true},
        {img:"29.gif", path:"29.glb",  title:"鱼" , Download:true, preview:true},
        {img:"30.gif", path:"30.glb",  title:"鱼" , Download:true, preview:true},
        {img:"31.gif", path:"31.glb",  title:"红树" , Download:true, preview:true},
        {img:"32.gif", path:"32.glb",  title:"树" , Download:true, preview:true},
        {img:"33.gif", path:"33.glb",  title:"树" , Download:true, preview:true},
        {img:"34.gif", path:"34.glb",  title:"树" , Download:true, preview:true},
        {img:"35.gif", path:"35.glb",  title:"小区" , Download:true, preview:true},
        {img:"36.gif", path:"36.glb",  title:"小区" , Download:true, preview:true},
        {img:"37.gif", path:"37.glb",  title:"建筑物" , Download:true, preview:true},
        {img:"38.gif", path:"38.glb",  title:"建筑物" , Download:true, preview:true},
        {img:"39.gif", path:"39.glb",  title:"火车" , Download:true, preview:true},
        {img:"40.jpeg", path:"40.glb",  title:"教堂" , Download:true, preview:true},
        {img:"41.jpeg", path:"41.glb",  title:"居民房" , Download:true, preview:true},
        {img:"42.jpeg", path:"42.glb",  title:"箱式车体" , Download:true, preview:true},
        {img:"43.jpeg", path:"43.glb",  title:"小汽车" , Download:true, preview:true},
        {img:"44.jpeg", path:"44.glb",  title:"小汽车" , Download:true, preview:true},
        {img:"45.gif", path:"45.glb",  title:"未来城市" , Download:true, preview:true},
        {img:"46.gif", path:"46.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"47.gif", path:"47.glb",  title:"松树" , Download:true, preview:true},
        {img:"48.gif", path:"48.glb",  title:"雕像" , Download:true, preview:true},
        {img:"49.gif", path:"49.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"50.gif", path:"50.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"51.gif", path:"51.glb",  title:"树" , Download:true, preview:true},
        {img:"52.gif", path:"52.glb",  title:"树" , Download:true, preview:true},
        {img:"53.gif", path:"53.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"54.gif", path:"54.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"55.gif", path:"55.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"56.gif", path:"56.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"57.gif", path:"57.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"58.gif", path:"58.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"59.gif", path:"59.glb",  title:"椰子树" , Download:true, preview:true},


        {img:"61.gif", path:"61.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"62.gif", path:"62.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"63.gif", path:"63.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"64.gif", path:"64.glb",  title:"椰子树" , Download:true, preview:true},



        {img:"65.jpeg", path:"65.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"66.jpeg", path:"66.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"67.jpeg", path:"67.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"68.jpeg", path:"68.glb",  title:"椰子树" , Download:true, preview:true},


        
        {img:"69.jpeg", path:"69.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"70.jpeg", path:"70.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"71.jpeg", path:"71.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"72.jpeg", path:"72.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"73.jpeg", path:"73.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"74.jpeg", path:"74.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"75.jpeg", path:"75.glb",  title:"椰子树" , Download:true, preview:true},


        
        {img:"76.jpeg", path:"76.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"77.gif", path:"77.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"78.gif", path:"78.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"79.gif", path:"79.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"80.gif", path:"80.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"81.gif", path:"81.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"82.gif", path:"82.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"83.gif", path:"83.glb",  title:"椰子树" , Download:true, preview:true},


        {img:"87.gif", path:"84.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"85.gif", path:"85.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"86.gif", path:"86.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"87.gif", path:"87.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"88.gif", path:"88.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"89.gif", path:"89.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"90.gif", path:"90.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"91.gif", path:"91.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"92.gif", path:"92.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"93.gif", path:"93.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"94.gif", path:"94.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"95.gif", path:"95.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"96.gif", path:"96.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"97.gif", path:"97.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"98.gif", path:"98.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"99.gif", path:"99.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"100.gif", path:"100.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"101.gif", path:"101.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"102.gif", path:"102.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"103.gif", path:"103.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"104.gif", path:"104.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"105.gif", path:"105.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"106.gif", path:"106.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"107.gif", path:"107.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"108.gif", path:"108.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"109.gif", path:"109.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"110.gif", path:"110.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"111.gif", path:"111.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"112.gif", path:"112.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"113.gif", path:"113.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"114.gif", path:"114.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"115.gif", path:"115.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"116.gif", path:"116.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"117.gif", path:"117.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"118.gif", path:"118.glb",  title:"椰子树" , Download:true, preview:true},



        {img:"119.gif", path:"119.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"120.gif", path:"120.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"121.gif", path:"121.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"122.gif", path:"122.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"123.gif", path:"123.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"124.gif", path:"124.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"125.gif", path:"125.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"126.gif", path:"126.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"127.gif", path:"127.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"128.gif", path:"128.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"129.gif", path:"129.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"130.gif", path:"130.glb",  title:"椰子树" , Download:true, preview:true},

        {img:"131.gif", path:"131.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"132.gif", path:"132.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"133.gif", path:"133.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"134.gif", path:"134.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"135.gif", path:"135.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"136.gif", path:"136.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"137.gif", path:"137.glb",  title:"椰子树" , Download:true, preview:true},


        {img:"131.gif", path:"131.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"132.gif", path:"132.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"133.gif", path:"133.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"134.gif", path:"134.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"135.gif", path:"135.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"136.gif", path:"136.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"137.gif", path:"137.glb",  title:"椰子树" , Download:true, preview:true},


        {img:"138.gif", path:"138.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"139.gif", path:"139.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"140.gif", path:"140.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"141.gif", path:"141.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"142.gif", path:"142.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"143.gif", path:"143.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"144.gif", path:"144.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"145.gif", path:"145.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"146.gif", path:"146.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"147.gif", path:"147.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"148.gif", path:"148.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"149.gif", path:"149.glb",  title:"椰子树" , Download:true, preview:true},
        {img:"150.gif", path:"150.glb",  title:"椰子树" , Download:true, preview:true},


        {img:"151.gif", path:"151.glb",  title:"模型" , Download:true, preview:true},
        {img:"152.gif", path:"152.glb",  title:"模型" , Download:true, preview:true},
        {img:"153.gif", path:"153.glb",  title:"模型" , Download:true, preview:true},
        {img:"155.gif", path:"155.glb",  title:"模型" , Download:true, preview:true},
        {img:"156.gif", path:"156.glb",  title:"模型" , Download:true, preview:true},
        {img:"157.gif", path:"157.glb",  title:"模型" , Download:true, preview:true},
        {img:"158.gif", path:"158.glb",  title:"模型" , Download:true, preview:true},
        {img:"159.gif", path:"159.glb",  title:"模型" , Download:true, preview:true},
        {img:"160.gif", path:"160.glb",  title:"模型" , Download:true, preview:true},
        {img:"161.gif", path:"161.glb",  title:"模型" , Download:true, preview:true},
        {img:"162.gif", path:"162.glb",  title:"模型" , Download:true, preview:true},
        {img:"163.gif", path:"163.glb",  title:"模型" , Download:true, preview:true},
        {img:"164.gif", path:"164.glb",  title:"模型" , Download:true, preview:true},
        {img:"165.gif", path:"165.glb",  title:"模型" , Download:true, preview:true},
        {img:"166.gif", path:"166.glb",  title:"模型" , Download:true, preview:true},
        {img:"167.gif", path:"167.glb",  title:"模型" , Download:true, preview:true},
        {img:"168.gif", path:"168.glb",  title:"模型" , Download:true, preview:true},
        {img:"169.gif", path:"169.glb",  title:"模型" , Download:true, preview:true},
        {img:"170.gif", path:"170.glb",  title:"模型1" , Download:true, preview:true},
   


 

        
       
    ],
    paymodel:[
        
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
        {img:"2.jpeg", name:"1.glb", title:"汽车" , pay:"100"},
       
    ]

    
};


window.UIConfig = UIConfig;
