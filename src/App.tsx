import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteShell } from './components/SiteShell'

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })))
const GamePage = lazy(() => import('./pages/GamePage').then(module => ({ default: module.GamePage })))
const MathematicsPage = lazy(() => import('./pages/MathematicsPage').then(module => ({ default: module.MathematicsPage })))
const PlacementPage = lazy(() => import('./pages/PlacementPage').then(module => ({ default: module.PlacementPage })))
const ResearchPage = lazy(() => import('./pages/ResearchPage').then(module => ({ default: module.ResearchPage })))
const TeamPage = lazy(() => import('./pages/TeamPage').then(module => ({ default: module.TeamPage })))
const ProgressPage = lazy(() => import('./pages/ProgressPage').then(module => ({ default: module.ProgressPage })))
const PlayPage = lazy(() => import('./pages/PlayPage').then(module => ({ default: module.PlayPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })))

export default function App() {
  return <SiteShell><Suspense fallback={<div className="route-loading" role="status">MathSprout…</div>}><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/game" element={<GamePage />} />
    <Route path="/mathematics" element={<MathematicsPage />} />
    <Route path="/starting-point" element={<PlacementPage />} />
    <Route path="/placement" element={<Navigate to="/starting-point" replace />} />
    <Route path="/research" element={<ResearchPage />} />
    <Route path="/team" element={<TeamPage />} />
    <Route path="/progress" element={<ProgressPage />} />
    <Route path="/play" element={<PlayPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Suspense></SiteShell>
}
