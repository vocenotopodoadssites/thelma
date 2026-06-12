/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  category: string;
  icon: string;
  image: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  condition: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProfessionalData {
  name: string;
  role: string;
  crefito: string;
  specialties: string[];
  bio: string;
  experienceYears: number;
}
