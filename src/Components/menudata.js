import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

export const Menudata = [
    {
        title: "Home",
        icon: <HomeRoundedIcon></HomeRoundedIcon>,
        link: "/home"

    },
    {
        title: "Analytics",
        icon: <AssessmentRoundedIcon></AssessmentRoundedIcon>,
        link: "/Analytics"

    },
    {
        title: "Admin",
        icon: <AdminPanelSettingsRoundedIcon></AdminPanelSettingsRoundedIcon>,
        link: "/AdminLogin"

    },
    

]