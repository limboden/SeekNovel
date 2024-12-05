import { GraphQLContexts } from '../types/types'
import User from '../models/User';
import { signToken } from '../services/auth';
import mongoose from 'mongoose';



const resolvers = {
  Query: {
  },
  Mutation: {
  },
};

module.exports = resolvers;

