import React, { useEffect } from 'react';
import {useNavigate } from "react-router-dom"

import { useTranslation } from "react-i18next";

export default function Spanish() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    i18n.changeLanguage("es");
       return navigate("/");
 },[]);
  return('Changing language')
}
