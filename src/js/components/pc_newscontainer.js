import React from "react";
import {Row,Col} from "antd";
import {Tabs,Carousel} from "antd";
import PCNewsBlock from './pc_news_block';
import PCProduct from './pc_products';
import PCNewsImageBlock from './pc_news_image_block';
const TabPane=Tabs.TabPane;
class PCNewsContainer extends React.Component{
	render(){
		document.title="首页";
		const settings={
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autopaly:true
		};
		return(
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div>
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
						</div>

						<Tabs class="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="国内" key="3">
								<PCNewsBlock count={22} type="guonei" width="100%" bordered="false" />
							</TabPane>
							<TabPane tab="娱乐" key="4">
								<PCNewsBlock count={22} type="yule" width="100%" bordered="false" />
							</TabPane>
						</Tabs>
						<Tabs className="tabs_product">
							<TabPane tab="网易的product" key="1">
							 <PCProduct/>
							</TabPane>
						</Tabs>
						<div>
						
								<PCNewsImageBlock count={10} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="160px"/>
								<PCNewsImageBlock count={10} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="160px"/>
						
							
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
export default PCNewsContainer;