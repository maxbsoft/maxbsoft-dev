import { AxiosResponse } from 'axios';
import { InformationModel, PortfolioFiltersModel } from '@/models';
import { http } from './http';

const getInformation = async (): Promise<InformationModel> => {
  try {
    let res: AxiosResponse<InformationModel> =
      await http.get('/information.json');
    return res.data;
  } catch (error) {
    console.error('getInformation', error);
    throw error;
  }
};

const getServices = async () => {
  let res = await http.get('/services.json');
  return res.data;
};

const getTechskills = async () => {
  let res = await http.get('/techskills.json');
  return res.data;
};

const getLanguageskills = async () => {
  let res = await http.get('/languageskills.json');
  return res.data;
};

const getPortfolioFilters = async (): Promise<PortfolioFiltersModel> => {
  try {
    let res: AxiosResponse<PortfolioFiltersModel> = await http.get(
      '/portfoliofilters.json'
    );
    return res.data;
  } catch (error) {
    console.error('getPortfolioFilters', error);
    throw error;
  }
};

const getPortfolios = async () => {
  let res = await http.get('/portfolios.json');
  return res.data;
};

const getJobExperience = async () => {
  let res = await http.get('/jobexperience.json');
  return res.data;
};

const getEducationBackground = async () => {
  let res = await http.get('/educationbackground.json');
  return res.data;
};

const getClientReviews = async () => {
  let res = await http.get('/clientsreview.json');
  return res.data;
};

export {
  getInformation,
  getServices,
  getTechskills,
  getLanguageskills,
  getPortfolioFilters,
  getPortfolios,
  getJobExperience,
  getEducationBackground,
  getClientReviews,
};
