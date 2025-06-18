import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectDetailSection from '@/components/sections/ProjectDetailSection';
import type { Metadata, ResolvingMetadata } from 'next';

// Mock data store for projects - in a real app, this might come from a database or CMS
const mockProjectsData = [
  { id: "smart-bpo-suite", title: "SmartBPO Suite Project Details" },
  { id: "data-insight-engine", title: "DataInsight Engine Project Details" },
  { id: "global-translate-hub", title: "GlobalTranslate Hub Project Details" },
  { id: "talent-finder-ai", title: "TalentFinder AI Project Details" },
];

type Props = {
  params: { projectId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const projectId = params.projectId;
  const project = mockProjectsData.find(p => p.id === projectId);

  return {
    title: project ? `${project.title} | LDS Data Solutions` : 'Project Details | LDS Data Solutions',
    description: `Detailed information about the ${project?.title || 'project'} by LDS Data Solutions.`,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <ProjectDetailSection projectId={params.projectId} />
      </main>
      <Footer />
    </div>
  );
}

// Optional: If you want to statically generate these pages at build time
export async function generateStaticParams() {
  return mockProjectsData.map(project => ({
    projectId: project.id,
  }));
}
