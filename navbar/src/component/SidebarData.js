import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import home from './landing pages/Home.js'
import about from './landing pages/About.js'


export const SidebarData =
  [
    {
      title: "General",
      icon: "bi-gear-fill",
      childrens: [
        {
          title: "Home",
          icon: "bi-house-fill",
          path: "/home"
        },
        {
          title: "About",
          icon: "bi-info-circle-fill",
          path: "/about"
        },
        {
          title: "Contact",
          icon: "bi-phone-fill",
          childrens: [
            {
              title: "Facebook",
              icon: "bi-facebook",
              childrens: [
                {
                  title: "Home",
                  icon: "bi-house-fill",
                  path: "/"
                },
                {
                  "title": "About",
                  "icon": "bi-info-circle-fill",
                  "path": "/about"
                }
              ]
            },
            {
              "title": "Twitter",
              "icon": "bi-twitter"
            },
            {
              "title": "Instagram",
              "icon": "bi-instagram"
            }
          ]
        },
        {
          "title": "FAQ",
          "icon": "bi-question-circle-fill"
        }
      ]
    },
    {
      "title": "Account",
      "icon": "bi-info-circle-fill",
      "childrens": [
        {
          "title": "Login",
          "path": "/login"
        },
        {
          "title": "Register",
          "path": "/register"
        },
        {
          "title": "Forgot Password",
          "path": "/forgot-password"
        },
        {
          "title": "Reset Password",
          "path": "/reset-password"
        }
      ]
    },
    {
      "title": "Profile",
      "icon": "bi-person-fill",
      "childrens": [
        {
          "title": "Profile",
          "path": "/profile"
        },
        {
          "title": "Settings",
          "childrens": [
            {
              "title": "Account",
              "path": "/settings/account"
            },
            {
              "title": "Billing",
              "childrens": [
                {
                  "title": "Payment",
                  "path": "/settings/billing/payment"
                },
                {
                  "title": "Subscription",
                  "path": "/settings/billing/subscription"
                }
              ]
            },
            {
              "title": "Notifications",
              "path": "/settings/notifications"
            }
          ]
        },
        {
          "title": "Logout",
          "path": "/logout"
        }
      ]
    },
    {
      "title": "Advance",
      "icon": "bi-view-list",
      "childrens": [
        {
          "title": "Search",
          "path": "/search"
        },
        {
          "title": "History",
          "path": "/history"
        }
      ]
    },
    {
      "title": "Support",
      "icon": "bi-question-circle-fill",
      "path": "/support"
    },
    {
      "title": "Report Bug",
      "icon": "bi-bug",
      "path": "/report-bug"
    }
  ];
//  [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <AiIcons.AiFillHome />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Reports',
//     path: '/reports',
//     icon: <IoIcons.IoIosPaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: 'nav-text'
//   }
// ];

