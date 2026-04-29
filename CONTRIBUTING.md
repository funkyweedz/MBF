# Contributing to Moroccan Builders Foundation

Thank you for your interest in contributing to the Moroccan Builders Foundation platform! This document provides guidelines for submitting your project.

## How to Submit Your Project

We welcome contributions from Moroccan builders and entrepreneurs who want to showcase their innovative projects. To submit your project, please follow these steps:

### 1. Fork the Repository

1. Go to the [MBF GitHub repository](https://github.com/funkyweedz/MBF)
2. Click the **"Fork"** button in the top right corner
3. This will create a copy of the repository in your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/MBF.git
cd MBF
```

### 3. Create a New Branch

```bash
git checkout -b add-project-YOUR_PROJECT_NAME
```

### 4. Add Your Project

Edit the file `src/data/projects.ts` and add your project to the `projects` array following this format:

```typescript
{
  id: 'UNIQUE_ID',
  title: 'Your Project Name',
  titleAr: 'اسم مشروعك بالعربية',
  description: 'A brief description of your project (English)',
  descriptionAr: 'وصف موجز لمشروعك (العربية)',
  category: 'ai' | 'blockchain' | 'tech',
  imageUrl: 'URL_TO_YOUR_LOGO',
  website: 'https://your-project-website.com',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: false,
  createdAt: '2024-04-29',
  founder: 'Your Name',
  founderAr: 'اسمك بالعربية'
}
```

### 5. Commit Your Changes

```bash
git add src/data/projects.ts
git commit -m "Add project: YOUR_PROJECT_NAME"
```

### 6. Push to Your Fork

```bash
git push origin add-project-YOUR_PROJECT_NAME
```

### 7. Create a Pull Request

1. Go to your fork on GitHub
2. Click **"Compare & pull request"**
3. Fill in the PR description with details about your project
4. Click **"Create pull request"**

### 8. Wait for Review

Your pull request will be reviewed by the maintainers. You may be asked to make changes before it is merged.

## Project Requirements

To be accepted, your project must:

- ✅ Be founded or co-founded by a Moroccan
- ✅ Be a technology, AI, or blockchain project
- ✅ Have a working product or MVP
- ✅ Include complete information (logo, website, description)

## Questions?

If you have any questions, please open an issue on GitHub or contact us through our social media channels.

Thank you for contributing to the Moroccan tech ecosystem! 🚀
