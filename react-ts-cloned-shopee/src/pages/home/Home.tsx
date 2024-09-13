import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import './home.css'
import { Button } from "antd";
import { homeState } from "./HomeState";

const Home = ()=>{
    useEffect(()=>{
        // homeState.handleLocationGetting();
    },[])
    return(
        <div className="home">
            <main className="container mx-auto">
                <div className="banner-section overflow-hidden rounded-tl-3xl rounded-br-3xl">
                    <div className="banner-background"></div>
                    <div className="grid grid-cols-2 banner-content">
                        <div className="column banner-text flex items-center justify-center h-full">
                            <div className="text-2xl text-center">
                                <span className="w-full">Thưởng thức món ngon từ hàng ngàn quán ăn ngay tại nhà trên</span>
                                <strong className="text-signature text-4xl font-extrabold pt-1"><em>Nhoằm nhoằm</em></strong>
                            </div>
                        </div>
                        <div className="column banner-img">
                            <img src="/assets/img/photos/food-spinner.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="menu-section">
                    <div className="menu-title text-center">
                        <h2 className="text-2xl font-bold pt-5">Thực đơn của <div className="text-signature text-4xl">Nhoằm nhoằm</div></h2>
                    </div>
                    <div className="menu-content grid grid-cols-2">
                        <div className="card-section">
                            <div className="card-title text-center text-2xl font-semibold">Bữa sáng</div>
                            <div className="card-content">
                                <div className="dish-card">
                                    <img src="/assets/img/photos/banh-mi.jpg" alt="" className="dish-img"/>
                                    <div className="dish-info">
                                        <div className="upper">
                                            <div className="dish-name"><span>Bánh mì</span><span className="dish-price">20.000đ</span></div>
                                            <div className="dish-ingredient truncate">Bánh mì, dưa chuột, rau thơm, pate, trứng</div>
                                            
                                        </div>
                                        <div className="lower">
                                            <div className="dish-variant">
                                                <div className="dish-variant-item">Bánh mì trứng</div>
                                                <div className="dish-variant-item">Bánh mì ruốc</div>
                                                <div className="dish-variant-item">Bánh mì xúc xích</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-section">
                            <div className="card-title text-center text-2xl font-semibold">Bữa sáng</div>
                            <div className="card-content">
                                <div className="dish-card">
                                    <img src="/assets/img/photos/banh-mi.jpg" alt="" className="dish-img"/>
                                    <div className="dish-info">
                                        <div className="upper">
                                            <div className="dish-name"><span>Bánh mì</span><span className="dish-price">20.000đ</span></div>
                                            <div className="dish-ingredient truncate">Bánh mì, dưa chuột, rau thơm, pate, trứng</div>
                                            
                                        </div>
                                        <div className="lower">
                                            <div className="dish-variant">
                                                <div className="dish-variant-item">Bánh mì trứng</div>
                                                <div className="dish-variant-item">Bánh mì ruốc</div>
                                                <div className="dish-variant-item">Bánh mì xúc xích</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-section">
                            <div className="card-title text-center text-2xl font-semibold">Bữa sáng</div>
                            <div className="card-content">
                                <div className="dish-card">
                                    <img src="/assets/img/photos/banh-mi.jpg" alt="" className="dish-img"/>
                                    <div className="dish-info">
                                        <div className="upper">
                                            <div className="dish-name"><span>Bánh mì</span><span className="dish-price">20.000đ</span></div>
                                            <div className="dish-ingredient truncate">Bánh mì, dưa chuột, rau thơm, pate, trứng</div>
                                            
                                        </div>
                                        <div className="lower">
                                            <div className="dish-variant">
                                                <div className="dish-variant-item">Bánh mì trứng</div>
                                                <div className="dish-variant-item">Bánh mì ruốc</div>
                                                <div className="dish-variant-item">Bánh mì xúc xích</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 p-8 gap-4 text-center">
                    <div className="border p-3">
                        1
                        </div>
                        <div className="border p-3">
                        2
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default observer(Home)