# SkillBridge Server

Backend API para SkillBridge - Convierte skills de Claude a cualquier formato de IA.

## Deploy en Render (Gratis)

### Paso 1: Subir a GitHub
```bash
git init
git add .
git commit -m "SkillBridge server v1"
git remote add origin https://github.com/gabmarteu-commits/skillbridge.git
git push -u origin main --force
```

### Paso 2: Crear cuenta en Render
1. Andá a https://render.com
2. Creá cuenta con GitHub
3. Click en "New +" → "Web Service"
4. Conectá tu repo `skillbridge`
5. Configuración:
   - **Name**: `skillbridge`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
6. Click "Create Web Service"

### Paso 3: Esperar
- El deploy tarda ~2 minutos
- La URL será: `https://skillbridge.onrender.com`

## API Endpoints

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/health` | GET | Verificar que el server funciona |
| `/api/fetch-skill?repo=owner/name` | GET | Descargar skill desde GitHub (sin CORS!) |
| `/api/search-skills` | GET | Buscar skills populares en GitHub |
| `/api/convert` | POST | Guardar una conversión |
| `/api/conversions` | GET | Ver conversiones recientes |
| `/api/most-converted` | GET | Skills más convertidos |
| `/api/popular-skills` | GET | Skills populares trackeados |
| `/api/stats` | GET | Estadísticas de uso |

## Variables de Entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `GITHUB_TOKEN` | No | Token de GitHub para más requests por hora |
| `PORT` | No | Puerto (Render lo setea automáticamente) |
