import React from "react";
import NavigationBar from "../NavigationBar";
import MemberPresentation from "../MemberPresentation";
import GroupPresentation from "../GroupPresentation";

const Page = () => {
    return (
        <div>
            <NavigationBar />
            <GroupPresentation />
            <MemberPresentation />
        </div>)
}

export default Page;