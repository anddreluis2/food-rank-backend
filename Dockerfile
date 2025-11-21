FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/src/main"]
