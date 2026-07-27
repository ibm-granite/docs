// SPDX-License-Identifier: Apache-2.0
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Models',
      items: [
        'models/granite',
        'models/granite4-0',
        'models/docling',
        'models/vision',
        'models/speech',
        'models/guardian',
        'models/embedding',
        'models/time-series',
      ],
    },
    {
      type: 'category',
      label: 'Run Granite',
      items: [
        {
          type: 'category',
          label: 'Ollama',
          collapsed: true,
          customProps: {icon: 'download'},
          items: [
            'run/granite-with-ollama-mac',
            'run/granite-with-ollama-linux',
            'run/granite-with-ollama-windows',
          ],
        },
        'run/granite-with-vllm-containerized',
        'run/granite-with-lmstudio',
        'run/granite-on-partners',
      ],
    },
    {
      type: 'category',
      label: 'Model Standards',
      items: [
        'model-standards/naming-guidance',
        'model-standards/signature-verification',
      ],
    },
    {
      type: 'category',
      label: 'Responsible AI',
      items: [
        'responsible-ai/index',
        {
          type: 'link',
          label: 'Trust',
          href: 'https://www.ibm.com/granite/trust',
        },
      ],
    },
  ],
  cookbooksSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'use-cases/cookbooks',
        'use-cases/getting-credentials',
      ],
    },
    {
      type: 'category',
      label: 'Granite Language Cookbook',
      items: [
        'use-cases/prompt-engineering',
        'fine-tune/unsloth',
        'use-cases/summarize',
        'use-cases/langchain-rag',
        'use-cases/contract-analysis',
        'use-cases/prompt-declaration-language',
      ],
    },
    {
      type: 'category',
      label: 'Granite Vision Cookbook',
      items: [
        'use-cases/multimodal-rag',
      ],
    },
    {
      type: 'category',
      label: 'Granite Guardian Cookbook',
      items: [
        'use-cases/risk-detection',
        'use-cases/hap-detection',
      ],
    },
    {
      type: 'category',
      label: 'Granite Time Series Cookbook',
      items: [
        'fine-tune/time-series',
        'use-cases/forecast-energy-demand',
        'use-cases/forecast-bike-rentals',
      ],
    },
    {
      type: 'category',
      label: 'Agentic AI Cookbook',
      items: [
        'use-cases/granite-bee',
        'use-cases/beeai-basics',
        'use-cases/beeai-workflows',
        'use-cases/beeai-requirement-agent',
        'use-cases/travel-planner',
      ],
    },
    {
      type: 'category',
      label: 'Model Evaluation Cookbook',
      items: [
        'use-cases/unitxt',
        'use-cases/granite-as-judge',
      ],
    },
    {
      type: 'category',
      label: 'Additional Cookbooks',
      items: [
        'use-cases/granite-snack-cookbook',
        'use-cases/granite-community',
      ],
    },
  ],
};

export default sidebars;
