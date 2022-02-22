
import React, { useEffect } from 'react';
import {useNavigate } from "react-router-dom"

import { useTranslation } from "react-i18next";

export default function English() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    i18n.changeLanguage("en");
       return navigate("/");
 },[]);
  return('Changing language')
}