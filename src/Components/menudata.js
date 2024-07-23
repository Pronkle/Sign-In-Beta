import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

export const Menudata = [
    {
        title: "Home",
        icon: <HomeRoundedIcon></HomeRoundedIcon>,
        link: "/Homepage"

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
    {
        title: "Members",
        icon: <PeopleAltRoundedIcon></PeopleAltRoundedIcon>,
        link: "/Members"

    },
    {
        title: "Settings",
        icon: <SettingsRoundedIcon></SettingsRoundedIcon>,
        link: "/Settings"

    },
]