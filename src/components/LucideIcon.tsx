/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Lucide from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  // Safe mapping of dynamically requested Lucide components
  const IconComponent = (Lucide as any)[name];

  if (!IconComponent) {
    // Return a default icon if mapping fails
    return <Lucide.Activity className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
