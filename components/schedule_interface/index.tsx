import React, { useState } from 'react'
// import dayjs from "dayjs"
import { ViewType } from "@/types/schedule"
import { ViewControlBtn } from '@/components/buttons'

export default function index() {
    const [viewMode, setViewMode] = useState<ViewType>("week")
    // const [currentDate, setCurrentDate] = useState(dayjs())
    type BtnView = {
        label: string;
        value: ViewType | "today";
      };
    const viewButtons: { label: string; value: ViewType | "today" }[]= [
        { label: "Week", value: "week" },
        { label: "Month", value: "month" },
        // { label: "Today", value: "today" },
    ];

    const handleViewChange = (view: ViewType) => {
        setViewMode(view)
    }

    const handleToday = () => {
        // setCurrentDate(dayjs())
    }

    return (
        <div className="schedule-container">
            {/* Navigation Tabs */}
            <div className="navigation-bar">
                <div className="view-tabs">
                    {viewButtons.map((btn) => (
                        <ViewControlBtn
                            key={btn.value}
                            view={btn}
                            activeView={viewMode}
                            onChange={(value) => {
                                if (value === "today") {
                                    handleToday()
                                } else {
                                    handleViewChange(value)
                                }
                            }}
                        />
                    ))}

                    <button
                        className={`tab ${viewMode === "week" ? "active" : " "}`}
                        onClick={() => handleViewChange("week")}
                    >
                        Week
                    </button>
                    <button
                        className={`tab ${viewMode === "month" ? "active" : " "}`}
                        onClick={() => handleViewChange("month")}
                    >
                        Week
                    </button>
                    <button
                        className={`tab ${viewMode === "today" ? "active" : " "}`}
                        onClick={() => handleViewChange("today")}
                    >
                        Week
                    </button>
                </div>
            </div>

        </div>
    )
}
