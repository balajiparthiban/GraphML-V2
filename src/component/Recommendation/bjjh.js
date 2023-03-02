import React from "react";
import { useState } from 'react'
import DataBox from '../../component/DataBox'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SeniorChart from '../../component/SeniorManagementChart'
import { SalesData } from "../../json/sales";
import './style.scss'

import { MultiSelectCheckBox } from "multi-select-checkbox/dist/MultiSelectCheckBox";

const Executive = () => {



    //Chart
    const [userData] = useState({
        labels: SalesData.map((data) => data.__EMPTY),
        labels: SalesData.map((data) => data.Month),
        datasets: [
            // {
            //     type: 'line',
            //     label: 'Dataset 1',
            //     borderColor: 'rgb(255, 99, 132)',
            //     borderWidth: 2,
            //     fill: false,
            //     data: labels.map(() => faker.datatype.number({ min: 0, max: 200000 })),
            // },

            {
                label: 'Product1',
                data: SalesData.map((data) => (data.product1)),
                backgroundColor: ["#5d62b5"],
            },
            {
                label: 'Product2',
                data: SalesData.map((data) => (data.product2)),
                backgroundColor: ["#3dc8bd"],
            },
            {
                label: 'Product1_Product2',
                data: SalesData.map((data) => (data.product1_product2)),
                backgroundColor: ["#fb65b3"],
            },
            {
                label: 'Product2_Product1',
                data: SalesData.map((data) => (data.product2_product1)),
                backgroundColor: ["#bf53d3"],
            }
        ],

    });


    //product dd

    const options = [
        { label: 'Option 1', value: 'option_1' },
        { label: 'Option 2', value: 'option_2' },
        { label: 'Option 3', value: 'option_3' },
        { label: 'Option 4', value: 'option_4' },
    ]
    const getInitialState = () => {
        const value = "Orange";
        return value;
    };

    const [value, setValue] = useState(getInitialState);
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const CheckBoxList = [
        {
            label: "T1 Email Campaign 1",
            value: "T1_email_campaign1",
        },
        {
            label: "T2 Email Campaign 2",
            value: "T2_email_campaign2",
        },
        {
            label: "Email Campaign 1",
            value: "email_campaign1",
        },
        {
            label: "Email Campaign 2",
            value: "email_campaign2",
        },
        {
            label: "T4 Email Campaign 1 & 2",
            value: "T4_email_campaign1_and_2",
        },
        {
            label: "T5 Email Campaign 1 & Phone Call",
            value: "T5_email_campaign1_and_phone_call",
        },
        {
            label: "T6 Email Campaign 2 & Phone Call",
            value: "T6_email_campaign2_and_phone_call",
        }
    ];

    const [selectedValue, setSelectedValue] = useState([]);

    //campaign dd
    // const getInitialStateCampaign = () => {
    //     const value = "Orange";
    //     return value;
    // };

    // const [valueCampaign, setValueCampaign] = useState(getInitialStateCampaign);
    // const handleChangeCampaign = (e) => {
    //     setValueCampaign(e.target.value);
    // };

    const [Dropdownshow, setdropdownshow] = useState(false)
    const handleDDShow = () => [
        setdropdownshow(!Dropdownshow)
    ]


    return (
        <div className='executive-wrapper'>
            <div className='executive-head'>
                <h3>Executive</h3>

                <div className='executive-dd'>
                    <div className='dropdown'>
                        <select value={value} onChange={handleChange}>
                            <option value="Orange">Product 1</option>
                            <option value="Radish">Product 2</option>
                            <option value="Cherry">Product 1 & Product 2</option>
                            <option value="Apple">Product 2 & Product 1</option>
                        </select>
                    </div>
                    <div className='campaign-dropdown'>
                        <div className="dropdown" onClick={handleDDShow}>
                            <h3>Campaign</h3>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>

                        {Dropdownshow && (
                            <div className="multi-list">
                                <MultiSelectCheckBox
                                    selectAllShow={true}
                                    selectedCheckBox={[
                                        {
                                            label: "eat",
                                            value: "eat",
                                        },
                                    ]}
                                    searchLabelName="Campaign"
                                    searchLabelClassName="searchLabelClassName"
                                    // searchFilterParentDivClassName="searchFilterParentDivClassName"
                                    searchFilterClassName="searchFilterClassName"
                                    // searchPlaceHolderName="Search Here..."
                                    showSearchBox={false}
                                    selectAllClassLabelName="select_all_label_class_name"
                                    listOfCheckBoxItemsLabelClassName="list_of_checkbox_item_label_class_name"
                                    selectAllParentDivClassName="selectAllParentDivClassName"
                                    listOfAllCheckBoxParentDivClassName="listOfAllCheckBoxParentDivClassName"
                                    selectAllShowClassName="select_all_checkbox_classname"
                                    listOfCheckBoxItemsClassName="list_of_all_checkbox_classname"
                                    CheckBoxList={CheckBoxList}
                                    selectAllLabelName="Select All"
                                    onChange={function (item) {
                                        setSelectedValue(item);
                                    }}
                                />
                            </div>
                        )}

                        {/* <select value={valueCampaign} onChange={handleChangeCampaign}>
                            <option value="Orange">Email Campaign 1</option>
                            <option value="Radish">Email Campaign 2</option>
                            <option value="Cherry">Phone Call</option>
                            <option value="Apple">Email Campaign 1 & 2</option>
                            <option value="Banana">Email Eampaign 1 & Phone Call</option>
                            <option value="Banana">Email Campaign 2 & Phone Call</option>
                        </select> */}
                        {/* <p>{`You selected ${valueCampaign}`}</p> */}
                    </div>
                </div>

            </div>

            <div>
                <DataBox />
                <SeniorChart chartData={userData} />
                <Table03 />
                <Table04 />
            </div>

        </div>
    )
}

export default Executive