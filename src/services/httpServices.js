import axios from 'axios';

const fetchData = async (url) => {
  try {
    const { data: fetchedData } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`,
    );
    return fetchedData;
  } catch (err) {
    return false;
  }
};

export const getCategories = async () => {
  const categories = await fetchData('categories');
  return categories;
};

export const getProjectCategories = async () => {
  const categories = await fetchData('project_category');
  return categories;
};

export const getProjects = async () => {
  const projects = await fetchData('projects?_embed&per_page=99');
  return projects;
};

export const getProjectsByCategory = async (categorySlug) => {
  const projects = await fetchData(
    `projects?_embed&project_category_slug=${categorySlug}`,
  );
  return projects;
};

export const getHomeProjects = async () => {
  const homeProjects = await fetchData(
    'projects?_embed&project_category_slug=featured',
  );
  return homeProjects;
};

export const getPosts = async () => {
  const posts = await fetchData('posts?_embed');
  return posts;
};

export const getProjectBySlug = async (slug) => {
  try {
    const project = await fetchData(`projects?slug=${slug}&_embed`);
    if (project[0]) {
      return project[0];
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const getPostBySlug = async (slug) => {
  try {
    const post = await fetchData(`posts?slug=${slug}&_embed`);
    if (post[0]) {
      return post[0];
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const getPostsByCategory = async (categoryID) => {
  const posts = await fetchData(`posts?_embed&categories=${categoryID}`);
  return posts;
};

export const getPostCategories = async () => {
  const posts = await fetchData('categories');
  return posts;
};
export const getPostsByCategorySlug = async (termSlug) => {
  const posts = await fetchData(`posts?_embed&post_category_slug=${termSlug}`);
  return posts;
};

export const getMoreProjects = async (currentProjectID) => {
  const MoreProjects = await fetchData(
    `projects?_embed&per_page=3&exclude=${currentProjectID}`,
  );
  return MoreProjects;
};

export const getPageDataBySlug = async (slug) => {
  try {
    const page = await fetchData(`pages?slug=${slug}`);
    if (page[0]) {
      return page[0];
    }
    return null;
  } catch (err) {
    return null;
  }
};
