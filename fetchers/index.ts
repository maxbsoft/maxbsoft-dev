import { AxiosResponse } from 'axios';
import {
  InformationModel,
  PortfolioFiltersModel,
  ResumeItemsModel,
  PortfolioItemsModel,
} from '@/models';
import { http } from './http';
import { ServicesModel } from '@/models/servicesModel';
import { SkillsModel } from '@/models/skillsModel';

const getInformation = async (): Promise<InformationModel> => {
  try {
    const res: AxiosResponse<InformationModel> = await http.get('/information.json');
    return res.data;
  } catch (error) {
    console.error('getInformation', error);
    throw error;
  }
};

const getServices = async (): Promise<ServicesModel> => {
  try {
    const res: AxiosResponse<ServicesModel> = await http.get('/services.json');
    return res.data;
  } catch (error) {
    console.error('getServices', error);
    throw error;
  }
};

const getTechskills = async (): Promise<SkillsModel> => {
  try {
    const res: AxiosResponse<SkillsModel> = await http.get('/techskills.json');
    return res.data;
  } catch (error) {
    console.error('getTechskills', error);
    throw error;
  }
};

const getLanguageskills = async (): Promise<SkillsModel> => {
  try {
    const res: AxiosResponse<SkillsModel> = await http.get('/languageskills.json');
    return res.data;
  } catch (error) {
    console.error('getLanguageskills', error);
    throw error;
  }
};

const getPortfolioFilters = async (): Promise<PortfolioFiltersModel> => {
  try {
    const res: AxiosResponse<PortfolioFiltersModel> = await http.get(
      '/portfoliofilters.json',
    );
    return res.data;
  } catch (error) {
    console.error('getPortfolioFilters', error);
    throw error;
  }
};

const getPortfolios = async (): Promise<PortfolioItemsModel> => {
  try {
    const res: AxiosResponse<PortfolioItemsModel> = await http.get('/portfolios.json');
    return res.data;
  } catch (error) {
    console.error('getPortfolios', error);
    throw error;
  }
};

const getJobExperience = async (): Promise<ResumeItemsModel> => {
  try {
    const res: AxiosResponse<ResumeItemsModel> = await http.get('/jobexperience.json');
    return res.data;
  } catch (error) {
    console.error('getJobExperience', error);
    throw error;
  }
};

const getEducationBackground = async (): Promise<ResumeItemsModel> => {
  try {
    const res: AxiosResponse<ResumeItemsModel> = await http.get(
      '/educationbackground.json',
    );
    return res.data;
  } catch (error) {
    console.error('getEducationBackground', error);
    throw error;
  }
};

const getClientReviews = async () => {
  const res = await http.get('/clientsreview.json');
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
